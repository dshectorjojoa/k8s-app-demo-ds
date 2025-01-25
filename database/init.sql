CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    count INTEGER DEFAULT 0,
    environment VARCHAR(50)
);

INSERT INTO visits (count, environment) VALUES (0, 'develop');