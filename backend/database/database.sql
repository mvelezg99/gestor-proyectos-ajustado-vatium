-- Database: bd_proyectos_vatium

CREATE TABLE users(
    id serial NOT NULL,
    name VARCHAR(70) NOT NULL,
    password VARCHAR(300) NOT NULL,
    type VARCHAR(70) DEFAULT 'normal',
    CONSTRAINT pk_users PRIMARY KEY (id)
);

CREATE TABLE roles(
    id serial NOT NULL,
    name VARCHAR(70) NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id)
);

-- Initial values for roles table
INSERT INTO roles(name) VALUES
	('Consultor'),
	('Analista'),
	('Conceptualizador');

CREATE TABLE resources(
    id serial NOT NULL,
    name VARCHAR(70) NOT NULL,
    role int NOT NULL,
    CONSTRAINT pk_resources PRIMARY KEY (id),
    CONSTRAINT fk_resources_roles FOREIGN KEY (role) REFERENCES roles (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Initial values for roles table
INSERT INTO resources(name, role) VALUES
	('César', 1),
	('Mileny', 1),
	('Juan', 1),
	('Maria Luisa', 2),
	('Sandra', 2),
	('Maria Isa', 3),
	('Marcela', 3);




