DROP DATABASE IF EXISTS retro_games_dev;
CREATE DATABASE retro_games_dev;

\c retro_games_dev;


CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    console TEXT NOT NULL,
    title TEXT NOT NULL,
    region TEXT,
    year_released TEXT,
    --description TEXT,
    developer TEXT,
    publisher TEXT,
    director TEXT,
    producer TEXT,
    artist TEXT,
    composer TEXT,
    genre TEXT,
    platforms TEXT
);






-- OLD SCHEMA

-- CREATE TABLE nes_games (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     region TEXT NOT NULL,
--     year_released TEXT NOT NULL,
--     --description TEXT,
--     developer TEXT,
--     publisher TEXT,
--     director TEXT,
--     producer TEXT,
--     artist TEXT,
--     composer TEXT,
--     genre TEXT,
--     platforms TEXT
-- );

-- CREATE TABLE gameboy_games (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     region TEXT,
--     year_released TEXT NOT NULL,
--     -- description TEXT,
--     developer TEXT,
--     publisher TEXT,
--     director TEXT,
--     producer TEXT,
--     artist TEXT,
--     composer TEXT,
--     genre TEXT,
--     platforms TEXT
-- );

-- CREATE TABLE snes_games (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     region TEXT NOT NULL,
--     year_released TEXT NOT NULL,
--     -- description TEXT,
--     developer TEXT,
--     publisher TEXT,
--     director TEXT,
--     producer TEXT,
--     artist TEXT,
--     composer TEXT,
--     genre TEXT,
--     platforms TEXT
-- );

-- CREATE TABLE n64_games (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     region TEXT,
--     year_released TEXT NOT NULL,
--     -- description TEXT,
--     developer TEXT,
--     publisher TEXT,
--     director TEXT,
--     producer TEXT,
--     artist TEXT,
--     composer TEXT,
--     genre TEXT,
--     platforms TEXT
-- );

-- CREATE TABLE pc_games (
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     region TEXT,
--     year_released TEXT NOT NULL,
--     -- description TEXT,
--     developer TEXT,
--     publisher TEXT,
--     director TEXT,
--     producer TEXT,
--     artist TEXT,
--     composer TEXT,
--     genre TEXT,
--     platforms TEXT
-- );