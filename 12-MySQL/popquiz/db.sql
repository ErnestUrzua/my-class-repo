
CREATE DATABASE DB;

USE db;

CREATE TABLE stuff (
  id INT NOT NULL AUTO_INCREMENT,
  descriptionText VARCHAR(10) NULL,
  PRIMARY KEY (id)
);

INSERT INTO stuff (descriptionText)
VALUES ("just some testing going on here");

INSERT INTO stuff (descriptionText)
VALUES ("some text"), ("some more text"),("even more text");