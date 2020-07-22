DROP DATABASE IF EXISTS showDB;
CREATE database showDB;

USE showDB;

CREATE TABLE 30rock (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
coolness_points INTEGER(3),
attitude VARCHAR(30),
PRIMARY KEY (id)
);

INSERT INTO 30rock(name,coolness_points,attitude) VALUES ("liz lemon", 50, "snarky");
INSERT INTO 30rock(name,coolness_points,attitude) VALUES ("jack donage", 80, "snarky");
INSERT INTO 30rock(name,coolness_points,attitude) VALUES ("tracy jordan", 100, "snarky");
INSERT INTO 30rock(name,coolness_points,attitude) VALUES ("jenna maroney", 30, "snarky");


SELECT * FROM 30rock;

