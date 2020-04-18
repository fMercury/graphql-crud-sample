MySQL

CREATE TABLE UserProfiles (
  id int NOT NULL,
  name varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  publickey varchar(255) NOT NULL,
  createdAt date NOT NULL,
  updatedAt date NOT NULL,
  PRIMARY KEY (id)
) ;

SELECT UserProfiles.id,
    UserProfiles.name,
    UserProfiles.lastname,
    UserProfiles.publickey,
    UserProfiles.createdAt,
    UserProfiles.updatedAt
FROM UserProfiles;


INSERT INTO UserProfiles
(id,
name,
lastname,
publickey)
VALUES
(01,franco,berdun, publick);
