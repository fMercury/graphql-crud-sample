POSTGRESQL

DROP TABLE userprofiles;

CREATE TABLE UserProfiles (
  id SERIAL,
  name varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  publickey varchar(255) NOT NULL,
  createdat date NOT NULL,
  updatedat date NOT NULL,
  PRIMARY KEY (id)
) ;


INSERT INTO userprofiles
VALUES 
(DEFAULT, 'frank', 'tank', 'public1', now(), now()),
(DEFAULT, 'fede', 'tank', 'public2', now(), now()),
(DEFAULT, 'mati', 'tank', 'public3', now(), now()),
(DEFAULT, 'augusto', 'tank', 'public4', now(), now())
;


SELECT * FROM "public"."userprofiles" LIMIT 100
