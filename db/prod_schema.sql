DROP TABLE IF EXISTS games, users, platforms;


CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    platform_id INT,
    user_id TEXT,
    title TEXT NOT NULL,
    region TEXT,
    year_released TEXT,
    summary TEXT,
    developer TEXT,
    publisher TEXT,
    director TEXT,
    producer TEXT,
    artist TEXT,
    composer TEXT,
    genre TEXT,
    mode TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    uuid TEXT
);

CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT
);
