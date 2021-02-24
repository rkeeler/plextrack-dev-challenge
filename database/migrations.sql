create database plextracdevchallenge;
 \connect plextracdevchallenge;
create schema plextracdevchallenge;

CREATE TABLE pagevisits (
  id            SERIAL PRIMARY KEY,
  resourcetype  varchar(10), -- 'movie' or 'character'
  resourceid    varchar(10)
);
