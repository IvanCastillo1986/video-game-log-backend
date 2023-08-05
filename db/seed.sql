\c retro_games_dev;


INSERT INTO games (
    platform_id, title, region, year_released
) VALUES 
(1, 'Princess Tomato in the Salad Kingdom', 'ntsc-u', '1991'),
(1, 'Mike Tyson''s Punch Out', 'ntsc-u', '1987'),
(1, 'Castlevania 2: Simon''s Quest', 'ntsc-u', '1987'),
(1, 'Mega Man 2', 'ntsc-j', '1988'),
(1, 'Ghosts ''n Goblins', 'pal', '1985'),
(1, 'Life Force', 'pal', '1986'),
(3, 'Contra 3: The Alien Wars', 'ntsc-u', '1992'),
(3, 'Super Mario RPG', 'pal', '1996'),
(3, 'Zelda: A Link to the Past', 'ntsc-j', '1986'),
(2, 'Metroid 2: Return of Samus', null, '1991'),
(2, 'Harvest Moon GB', null, '1997'),
(2, 'Final Fantasy Adventure', null, '1991'),
(2, 'Tetris', null, '1984'),
(2, 'Super Mario Land 2: 6 Golden Coins', null, '1992'),
(4, 'Phantasy Star', 'ntsc-j', '2000'),
(4, 'R-Type', 'pal', '2000'),
(5, 'Sonic the Hedgehog 2', 'ntsc-u', '2000'),
(5, 'Streets of Rage', 'pal', '2000'),
(5, 'Shining Force', 'ntsc-j', '2000'),
(6, 'Dragon Force', 'ntsc-u', '2000'),
(6, 'Panzer Dragoon Saga', 'pal', '1998'),
(6, 'Night into Dreams', 'ntsc-u', '1996'),
(7, 'Diablo 2', null, '2000'),
(7, 'Half Life', null, '1998'),
(7, 'Team Fortress 2', null, '2007')
;

INSERT INTO platforms (
    name, company
) VALUES 
('nes', 'nintendo'), --1
('game_boy', 'nintendo'), --2
('snes', 'nintendo'), --3
('master_system', 'sega'), --4
('genesis', 'sega'), --5
('sega_saturn', 'sega'), --6
('pc', null) --7
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