CREATE TABLE commentaires (
    id UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titre VARCHAR(80),
    texte TEXT
); 

CREATE TABLE statut (
    id UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    is_public BOOLEAN DEFAULT TRUE
);

CREATE TABLE repo (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(80) NOT NULL,
    url VARCHAR(255) NOT NULL, 
    statut_id INT UNSIGNED,
    FOREIGN KEY (statut_id) REFERENCES statut (id)
);

CREATE TABLE repo_commentaire (
    repo_id INT UNSIGNED,
    commentaire_id INT UNSIGNED,
    FOREIGN KEY (repo_id) REFERENCE repo (id) ON DELETE CASCADE, 
    FOREIGN KEY (commentaire_id) REFERENCE commentaire ON UPDATE CASCADE
); 

CREATE TABLE langage (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(80)
)

CREATE TABLE repo_langage (
    repo_id INT UNSIGNED,
    langage_id INT UNSIGNED,
    FOREIGN KEY (repo_id) REFERENCE repo (id) ON DELETE CASCADE,
    FOREIGN KEY (langage_id) REFERENCE langage (id) ON DELETE CASCADE,
)