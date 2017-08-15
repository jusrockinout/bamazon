USE bamazon;

CREATE TABLE products(
	itemId INT AUTO_INCREMENT NOT NULL,
    productName VARCHAR(50) NOT NULL,
    departmentName VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL DEFAULT 1.00,
    stockQuantity INTEGER(10) NOT NULL DEFAULT 0,
    PRIMARY KEY(itemId)
);

INSERT INTO bamazon.products(productName, departmentName, price, stockQuantity)
VALUE
	("Widget #1", "Widgets", 5.99, 5),
    ("Widget #2", "Widgets", 12.99, 10),
    ("Widget #3", "Widgets", 68.88, 6),
    ("Widget #4", "Widgets", 35.34, 15),
    ("Widget #5", "Widgets", 9.79, 15),
    ("Widget #6", "Widgets", 23.57, 20),
    ("Widget #7", "Widgets", 8.00, 25),
    ("Widget #8", "Widgets", 186.70, 30),
    ("Widget #9", "Widgets", 300.99, 35),
    ("Widget #10", "Widgets", 4.99, 40)