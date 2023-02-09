create database recipe_app;
use recipe_app;
select database();
create table recipe (
srno int unique not null auto_increment,
food_recipe varchar(500) not null
);