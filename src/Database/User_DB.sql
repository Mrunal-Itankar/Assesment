create database recipe_app;
use recipe_app;
select database();
create table user_details(
user_name varchar(25) not null,
user_email varchar(25) unique not null,
user_contact varchar(25) unique not null,
user_password varchar(50) unique not null
);