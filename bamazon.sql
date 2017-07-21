CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id (100) AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price INT (10) NOT NULL,
    stock_quantity INT (100) NOT NULL,
    PRIMARY KEY(item_id)
);

USE bamazon_db;

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('bananas', 'produce', 5, 20);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('apples', 'produce', 3, 15);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('chocolate', 'candy', 10, 50);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('rice', 'starch', 7, 30);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('pasta', 'starch', 7, 50);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('tampons', 'necessities', 1, 100);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('toilet paper', 'necessities', 5, 50);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('cucumber', 'produce', 2, 30);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('gummies', 'candy', 3, 40);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES 
	('underwear', 'necessities', 9, 80);