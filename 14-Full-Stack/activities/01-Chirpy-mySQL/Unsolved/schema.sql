DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

id INT(3),
author VARCHAR(30),
chirp INT(3),
time INT(3)
);