/*
# Create leads and newsletter tables

1. New Tables
- `leads`: free-question submissions from the homepage widget. Stores the visitor's name, date of birth, optional birth time, birth place, question, and submission time.
- `newsletter_subscribers`: email addresses from the footer newsletter signup. Each email can be stored only once.

2. Security
- Row Level Security is enabled on both tables.
- Anonymous visitors (the public website) can INSERT only. They cannot read, update, or delete any rows, so other visitors' personal details stay private.
- Field length checks prevent oversized submissions.

3. Important Notes
- No sign-in is used on the site, so the public role is granted insert access only.
- Duplicate newsletter emails are rejected by a unique constraint; the website treats that as "already subscribed".
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  date_of_birth date NOT NULL,
  birth_time time,
  birth_place text NOT NULL CHECK (char_length(birth_place) BETWEEN 1 AND 160),
  question text NOT NULL CHECK (char_length(question) BETWEEN 1 AND 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON leads TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 5 AND 254 AND email LIKE '%@%'),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON newsletter_subscribers TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);
