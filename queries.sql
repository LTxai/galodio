-- Active: 1658056894165@@127.0.0.1@3306@galodio
CREATE DATABASE `galodio`;
USE `galodio`;

CREATE TABLE IF NOT EXISTS `galodio_membro`(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    apelido VARCHAR(255) UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(64) NOT NULL
);

DROP TABLE `galodio_membro`;

CREATE TABLE IF NOT EXISTS `bolodio` (
	id VARCHAR (255) PRIMARY KEY,
    adversario VARCHAR(255) NOT NULL,
    dia VARCHAR(255) NOT NULL,
    palpite_liberado BOOLEAN NOT NULL,
    campeonato VARCHAR(255) NOT NULL,
    mando VARCHAR(255) NOT NULL,
    criador_bolodio VARCHAR(255),
    FOREIGN KEY (criador_bolodio) REFERENCES galodio_membro(id)
);
DROP TABLE `bolodio`;

CREATE TABLE IF NOT EXISTS `palpite_bolodio` (
	id varchar(255) PRIMARY KEY,
    gols_galo INT NOT NULL,
    gols_adv INT NOT NULL,
    autor_palpite VARCHAR(255),
    jogo VARCHAR(255),
    FOREIGN KEY (jogo) REFERENCES bolodio(id),
    FOREIGN KEY (autor_palpite) REFERENCES galodio_membro(apelido)
);

DROP TABLE `palpite_bolodio`;
SELECT * FROM `galodio_membro`;
SELECT * FROM `bolodio`;
SELECT * FROM `palpite_bolodio`;
