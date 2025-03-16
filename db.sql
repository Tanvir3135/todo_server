drop database if exists todo;

create database todo;

use todo;

CREATE TABLE
    task (
        id BIGSERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL
    );

insert into
    task (description)
values
    ('My test task');

insert into
    task (description)
values
    ('My another task');