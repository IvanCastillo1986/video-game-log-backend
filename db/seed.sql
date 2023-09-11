\c retro_games_dev;

-- When games table properties are not being used, will default to N/A
INSERT INTO games (
    platform_id, user_id, title, region, year_released, developer, publisher, director, producer, artist, composer, genre, mode
) VALUES 
(1, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Princess Tomato in the Salad Kingdom', 'ntsc-u', '1991', null, null, null, null, null, null, null, null),
(1, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Mike Tyson''s Punch Out', 'ntsc-u', '1987', null, null, null, null, null, null, null, null),
(1, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Castlevania 2: Simon''s Quest', 'ntsc-u', '1987', null, null, null, null, null, null, null, null),
(1, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Mega Man 2', 'ntsc-j', '1988', null, null, null, null, null, null, null, null),
(1, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Ghosts ''n Goblins', 'pal', '1985', null, null, null, null, null, null, null, null),
(1, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Life Force', 'pal', '1986', null, null, null, null, null, null, null, null),
(3, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Contra 3: The Alien Wars', 'ntsc-u', '1992', null, null, null, null, null, null, null, null),
(3, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Super Mario RPG', 'pal', '1996', null, null, null, null, null, null, null, null),
(3, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Zelda: A Link to the Past', 'ntsc-j', '1986', null, null, null, null, null, null, null, null),
(2, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Metroid 2: Return of Samus', null, '1991', null, null, null, null, null, null, null, null),
(2, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Harvest Moon GB', null, '1997', null, null, null, null, null, null, null, null),
(2, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Final Fantasy Adventure', null, '1991', null, null, null, null, null, null, null, null),
(2, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Tetris', null, '1984', null, null, null, null, null, null, null, null),
(2, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Super Mario Land 2: 6 Golden Coins', null, '1992', null, null, null, null, null, null, null, null),
(4, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Phantasy Star', 'ntsc-j', '2000', null, null, null, null, null, null, null, null),
(4, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'R-Type', 'pal', '2000', null, null, null, null, null, null, null, null),
(5, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Sonic the Hedgehog 2', 'ntsc-u', '2000', null, null, null, null, null, null, null, null),
(5, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Streets of Rage', 'pal', '2000', null, null, null, null, null, null, null, null),
(5, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Shining Force', 'ntsc-j', '2000', null, null, null, null, null, null, null, null),
(6, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Dragon Force', 'ntsc-u', '2000', null, null, null, null, null, null, null, null),
(6, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Panzer Dragoon Saga', 'pal', '1998', null, null, null, null, null, null, null, null),
(6, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Night into Dreams', 'ntsc-u', '1996', null, null, null, null, null, null, null, null),
(7, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Diablo 2', null, '2000', null, null, null, null, null, null, null, null),
(7, 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2', 'Half Life', null, '1998', null, null, null, null, null, null, null, null),
(7, 'l2NHp6bChhOmSte1F33nZAIn2Bj1', 'Team Fortress 2', null, '2007', null, null, null, null, null, null, null, null)
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


INSERT INTO users (
    email, uuid
) VALUES 
('icastillo@live.com', 'W9cPpzjZ3SOAUgEs4kIPbSSYYJR2'),
('total180training@gmail.com', 'l2NHp6bChhOmSte1F33nZAIn2Bj1')
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