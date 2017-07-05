CREATE DATABASE xxl;

-- Makes it so all of the following code will affect additional_favorites_db --
USE xxl;

-- Creates the table "favorite_foods" within additional_favorites_db --
CREATE TABLE `artists` (
  `id` INTEGER(11) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `coolness_points` VARCHAR(50) NOT NULL,
  `attitude` varchar(45),
  PRIMARY KEY (id)
);

INSERT INTO