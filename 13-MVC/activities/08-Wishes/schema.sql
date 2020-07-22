-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS wishes_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishes_db;

USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes (
  id INT NOT NULL AUTO_INCREMENT,
  wish VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish)
VALUES ('i want a pony');


