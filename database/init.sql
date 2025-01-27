CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    count INTEGER DEFAULT 0,
    environment VARCHAR(10) NOT NULL
);

INSERT INTO visits (count, environment) VALUES (0, 'develop');
