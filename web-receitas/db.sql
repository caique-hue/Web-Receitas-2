
DROP DATABASE IF EXISTS `recipes-app`;


CREATE DATABASE
IF NOT EXISTS `recipes-app`;

USE `recipes-app`;


CREATE TABLE
IF NOT EXISTS users
(
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR
(100) NOT NULL,
  email VARCHAR
(100) NOT NULL,
  password VARCHAR
(32) NOT NULL,
  PRIMARY KEY
(id),
  UNIQUE KEY email_un
(email)
);

INSERT INTO
  users
  (id, nome, email, password)
VALUES
  (
    1,
    'Delivery App Admin',
    'adm@deliveryapp.com',
    'a4c86edecc5aee06eff8fdeda69e0d04'
  ),
  -- senha: md5('--adm2@21!!--')
  (
    2,
    'Fulana Pereira',
    'fulana@deliveryapp.com',
    '3c28d2b0881bf46457a853e0b07531c6'
  ),
  -- senha: md5('fulana@123')
  (
    3,
    'Cliente Zé Birita',
    'zebirita@email.com',
    '1c37466c159755ce1fa181bd247cb925'
  );
  -- senha: md5('$#zebirita#$')