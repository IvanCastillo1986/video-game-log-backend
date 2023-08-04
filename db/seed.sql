\c retro_games_dev;


INSERT INTO games (
    console, title, region, year_released
) VALUES 
('nes', 'Princess Tomato in the Salad Kingdom', 'ntsc-u', '1991'),
('nes', 'Mike Tyson''s Punch Out', 'ntsc-u', '1987'),
('nes', 'Castlevania 2: Simon''s Quest', 'ntsc-u', '1987'),
('nes', 'Mega Man 2', 'ntsc-j', '1988'),
('nes', 'Ghosts ''n Goblins', 'pal', '1985'),
('snes', 'Contra 3: The Alien Wars', 'ntsc-u', '1992'),
('snes', 'Super Mario RPG', 'pal', '1996'),
('snes', 'Zelda: A Link to the Past', 'ntsc-j', '1986'),
('game-boy', 'Metroid 2: Return of Samus', null, '1991'),
('game-boy', 'Harvest Moon GB', null, '1997'),
('game-boy', 'Final Fantasy Adventure', null, '1991'),
('game-boy', 'Super Mario Land 2: 6 Golden Coins', null, '1992'),
('pc', 'Diablo 2', null, '2000'),
('pc', 'Half Life', null, '1998'),
('pc', 'Team Fortress', null, '2007')
;



-- OLD SEEDS


-- INSERT INTO nes_games (
--     title, region, year_released
-- ) VALUES 
-- ('Princess Tomato in the Salad Kingdom', 'ntsc-u', '1991'),
-- ('Mike Tyson''s Punch Out', 'ntsc-u', '1987'),
-- ('Castlevania 2: Simon''s Quest', 'ntsc-u', '1987'),
-- ('Mega Man 2', 'ntsc-j', '1988'),
-- ('Ghosts ''n Goblins', 'pal', '1985')
-- ;

-- INSERT INTO snes_games (
--     title, region, year_released
--     -- , developer, publisher, director, producer, artist, composer, genre, platforms
-- ) VALUES 
-- ('Contra 3: The Alien Wars', 'ntsc-u', '1992'),
-- ('Super Mario RPG', 'pal', '1996'),
-- ('Zelda: A Link to the Past', 'ntsc-j', '1986'),
-- ('Ivans World', 'ntsc-u', '1986')
-- ;

-- INSERT INTO gameboy_games (
--     title, region, year_released
-- ) VALUES 
-- ('Metroid 2: Return of Samus', null, '1991'),
-- ('Harvest Moon GB', null, '1997'),
-- ('Final Fantasy Adventure', null, '1991'),
-- ('Super Mario Land 2: 6 Golden Coins', null, '1992')
-- ;

-- INSERT INTO pc_games (
--     title, region, year_released
-- ) VALUES 
-- ('Diablo 2', null, '2000'),
-- ('Half Life', null, '1998'),
-- ('Team Fortress', null, '2007')
-- ;