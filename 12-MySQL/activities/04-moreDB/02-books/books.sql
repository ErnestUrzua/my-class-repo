DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;
USE library_db;

CREATE TABLE books(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
title VARCHAR(50) NOT NULL,
rating INTEGER(3),
PRIMARY KEY (id)
);

INSERT INTO books (title,rating)
VALUES ("LOTR",85);

INSERT INTO books (title,rating)
VALUES ("Twilight",30);

INSERT INTO books (title,rating)
VALUES ("Rome",69);

UPDATE books
SET title = "The Lord Of The Rings"
WHERE id = 1;

CREATE TABLE authors(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
firstName VARCHAR(50),
lastName VARCHAR(50),
PRIMARY KEY (id) 
);

INSERT INTO authors (firstName,lastName)
VALUES ("JRR","Tolken");

INSERT INTO authors (firstName,lastName)
VALUES ("Stephen","King");

INSERT INTO authors (firstName,lastName)
VALUES ("Dean","Koontz");


UPDATE authors
SET firstName = "J.R.R"
WHERE id = 1;


SELECT * FROM authors;

SELECT * FROM books;
