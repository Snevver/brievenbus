-- Migration: Create db_test table for connection testing
-- This table contains a single row with a boolean value to verify database connectivity.
CREATE TABLE IF NOT EXISTS db_test (
    id SERIAL PRIMARY KEY,
    connected BOOLEAN NOT NULL DEFAULT TRUE
);
-- Insert the test row
INSERT INTO db_test (connected)
VALUES (TRUE);
-- Enable Row Level Security (optional but recommended)
ALTER TABLE db_test ENABLE ROW LEVEL SECURITY;
-- Allow anyone with the anon key to read (for connection test)
CREATE POLICY "Allow read access for connection test" ON db_test FOR
SELECT USING (true);