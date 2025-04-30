CREATE TABLE etudiants (
    id INT PRIMARY KEY IDENTITY(1,1),
    nom VARCHAR(100),
    age INT
);

INSERT INTO etudiants (nom, age) VALUES ('Bob', 33), ('Patrick', 34), ('Carlo ', 46), ('Sandy ', 37);

SELECT * FROM etudiants;
