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

CREATE TABLE IF NOT EXISTS `bolodio` (
	id VARCHAR (255) PRIMARY KEY,
    adversario VARCHAR(255) NOT NULL,
    dia DATE NOT NULL,
    criador_bolodio VARCHAR(255),
    FOREIGN KEY (criador_bolodio) REFERENCES galodio_membro(id)
);

CREATE TABLE IF NOT EXISTS `palpite_bolodio` (
	id varchar(255) PRIMARY KEY,
    gols_galo INT NOT NULL,
    gols_adv INT NOT NULL,
    autor_palpite VARCHAR(255),
    FOREIGN KEY (autor_palpite) REFERENCES galodio_membro(id)
);

SELECT * FROM `galodio_membro`;