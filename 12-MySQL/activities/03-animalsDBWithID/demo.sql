-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(100)
);
CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(100) NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(100)
);
CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(100) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL DEFAULT FALSE,
  -- Make an integer column called "score" --
  score INTEGER(100)
  -- Set the primary key of the table to id --
);
INSERT INTO favorite_foods (food, score)
VALUES ("Lobster", 95);

INSERT INTO favorite_songs (song, artist)
VALUES ("bohemian rhapsody", "queen");

INSERT INTO favorite_songs (song, artist)
VALUES ("Umbrella", "RhiRhi");

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Joe Dirt", TRUE, 100);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Mean Girls", TRUE, 100);

INSERT INTO favorite_movies (movie, score)
VALUES ("Casablanca", 100);



