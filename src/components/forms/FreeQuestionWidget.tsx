import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AlertTriangle, ArrowRight, Loader2, MessageCircle, Sparkles } from 'lucide-react';
import { saveLead, type LeadInput } from '@/lib/submissions';
import { buildLeadMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const QUESTION_MIN_LENGTH = 10;
const TRANSITION_MS = 1600;

const EMPTY_LEAD: LeadInput = {
  fullName: '',
  dateOfBirth: '',
  birthTime: '',
  birthPlace: '',
  question: '',
};

const STEPS = [
  'Share your birth details so your chart can be prepared',
  'Describe the one question on your mind',
  'Continue to WhatsApp with everything already filled in',
];

type LeadErrors = Partial<Record<keyof LeadInput, string>>;
type Status = 'idle' | 'submitting' | 'failed';

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function validate(values: LeadInput): LeadErrors {
  const errors: LeadErrors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your name.';
  if (!values.dateOfBirth) errors.dateOfBirth = 'Please enter your date of birth.';
  else if (values.dateOfBirth > todayIso()) errors.dateOfBirth = 'Date of birth cannot be in the future.';
  if (!values.birthPlace.trim()) errors.birthPlace = 'Please enter your place of birth.';
  if (values.question.trim().length < QUESTION_MIN_LENGTH) {
    errors.question = `Please share at least ${QUESTION_MIN_LENGTH} characters.`;
  }
  return errors;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
      {children}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-error-300">
      {message}
    </p>
  );
}

export default function FreeQuestionWidget() {
  const [values, setValues] = useState<LeadInput>(EMPTY_LEAD);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);
  const isSubmitting = status === 'submitting';

  function updateField(field: keyof LeadInput) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((previous) => ({ ...previous, [field]: value }));
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const whatsAppUrl = buildWhatsAppUrl(buildLeadMessage(values));
    setStatus('submitting');

    const [saved] = await Promise.all([
      saveLead(values).then(
        () => true,
        () => false,
      ),
      wait(TRANSITION_MS),
    ]);

    if (saved) {
      window.location.href = whatsAppUrl;
      return;
    }

    setFallbackUrl(whatsAppUrl);
    setStatus('failed');
  }

  const inputClass = (field: keyof LeadInput) =>
    `input-field ${errors[field] ? 'border-error-400 focus:border-error-400 focus:ring-error-400/30' : ''}`;

  return (
    <section id="free-question" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow">Your First Answer Is Free</p>
          <h2 className="mt-4 text-4xl leading-[1.15] sm:text-5xl">Ask your question. Receive your reading on WhatsApp.</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg">
            Tell us a little about yourself and the question that matters most. We will take it from there, and your
            details arrive pre-filled, so there is nothing to retype.
          </p>
          <ol className="mt-10 space-y-5">
            {STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/40 font-serif text-lg text-gold-200">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-sm leading-relaxed text-ink-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="glass-card relative overflow-hidden p-6 sm:p-10 lg:col-span-7">
          {isSubmitting && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-0 z-10 flex animate-fade-up flex-col items-center justify-center gap-5 bg-ink-950/90 px-8 text-center backdrop-blur-md"
            >
              <Sparkles className="h-12 w-12 animate-spin-slow text-gold-300" aria-hidden="true" />
              <p className="font-serif text-2xl text-ink-50">Aligning your details with the stars&hellip;</p>
              <p className="flex items-center gap-2 text-sm text-ink-300">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Opening WhatsApp with your question
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="lead-full-name">Full name</FieldLabel>
              <input
                id="lead-full-name"
                type="text"
                autoComplete="name"
                maxLength={120}
                value={values.fullName}
                onChange={updateField('fullName')}
                placeholder="As it appears on your birth record"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'lead-full-name-error' : undefined}
                className={inputClass('fullName')}
              />
              <FieldError id="lead-full-name-error" message={errors.fullName} />
            </div>

            <div>
              <FieldLabel htmlFor="lead-dob">Date of birth</FieldLabel>
              <input
                id="lead-dob"
                type="date"
                max={todayIso()}
                value={values.dateOfBirth}
                onChange={updateField('dateOfBirth')}
                aria-invalid={Boolean(errors.dateOfBirth)}
                aria-describedby={errors.dateOfBirth ? 'lead-dob-error' : undefined}
                className={inputClass('dateOfBirth')}
              />
              <FieldError id="lead-dob-error" message={errors.dateOfBirth} />
            </div>

            <div>
              <FieldLabel htmlFor="lead-time">
                Time of birth <span className="normal-case tracking-normal text-ink-400">(optional)</span>
              </FieldLabel>
              <input
                id="lead-time"
                type="time"
                value={values.birthTime}
                onChange={updateField('birthTime')}
                className={inputClass('birthTime')}
              />
              <p className="mt-2 text-xs text-ink-400">Leave blank if you do not know it.</p>
            </div>

            <div className="sm:col-span-2">
              <FieldLabel htmlFor="lead-place">Place of birth</FieldLabel>
              <input
                id="lead-place"
                type="text"
                autoComplete="off"
                maxLength={160}
                value={values.birthPlace}
                onChange={updateField('birthPlace')}
                placeholder="City, Country"
                aria-invalid={Boolean(errors.birthPlace)}
                aria-describedby={errors.birthPlace ? 'lead-place-error' : undefined}
                className={inputClass('birthPlace')}
              />
              <FieldError id="lead-place-error" message={errors.birthPlace} />
            </div>

            <div className="sm:col-span-2">
              <FieldLabel htmlFor="lead-question">Your burning question</FieldLabel>
              <textarea
                id="lead-question"
                rows={4}
                maxLength={1000}
                value={values.question}
                onChange={updateField('question')}
                placeholder="For example: Is this the right time to change careers, or should I wait until next year?"
                aria-invalid={Boolean(errors.question)}
                aria-describedby={errors.question ? 'lead-question-error' : undefined}
                className={`${inputClass('question')} resize-none`}
              />
              <FieldError id="lead-question-error" message={errors.question} />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" disabled={isSubmitting} className="btn-gold w-full px-8 py-4 text-base">
                Submit / Get Free Answer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-4 text-center text-xs text-ink-400">
                Your details are kept confidential and used only to prepare your reading.
              </p>
            </div>
          </form>

          {status === 'failed' && fallbackUrl && (
            <div role="alert" className="mt-6 rounded-xl border border-warning-500/40 bg-warning-900/40 p-5">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-warning-300">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                We could not save your details online just now, but you can still send them directly on WhatsApp.
              </p>
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mt-4 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Continue to WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
