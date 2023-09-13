-- DROP DATABASE IF EXISTS retro_games_dev;
-- CREATE DATABASE retro_games_dev;

-- \c retro_games_dev;


CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    platform_id INT,
    user_id TEXT,
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
    mode TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    uuid TEXT --> games.user_id
);

-- CREATE TABLE games_of_users (
--     id SERIAL PRIMARY KEY,
--     game_id INT,
--     user_id TEXT
-- );

CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT
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