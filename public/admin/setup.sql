-- ──────────────────────────────────────────────────────────────
-- Astera Clinic — Supabase Setup
-- Run this entire file in Supabase > SQL Editor
-- ──────────────────────────────────────────────────────────────

-- 1. Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name      TEXT        NOT NULL,
  phone          TEXT        NOT NULL,
  department     TEXT        NOT NULL,
  preferred_date DATE        NOT NULL,
  preferred_time TIME,
  status         TEXT        DEFAULT 'pending'
                             CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- 3. Allow authenticated admins to read, update, delete all rows
CREATE POLICY "Admins can manage appointments"
  ON appointments
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 4. Allow anyone (the public booking form) to INSERT only
CREATE POLICY "Public can submit appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────
-- After running this SQL:
-- 1. Go to Supabase > Authentication > Users > Add user
--    (create your admin email + password)
-- 2. Copy your Project URL and anon public key from
--    Supabase > Settings > API
-- 3. Paste them into:
--    - public/admin/index.html  (SUPABASE_URL, SUPABASE_ANON_KEY)
--    - .env.local               (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
-- ──────────────────────────────────────────────────────────────
