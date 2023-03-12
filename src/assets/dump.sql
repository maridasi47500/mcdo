

CREATE TABLE IF NOT EXISTS items(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    description TEXT, 
    url TEXT,
cat_id INTEGER
);
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT, 
    mdp TEXT
emailcommercial int,nom text,tel text
);
CREATE TABLE IF NOT EXISTS commandes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id integer,
    boisson1_id integer, 
    boisson2_id integer, 
    pdt_id integer,
    promodessert_id integer,
    promotion_id integer,
    promotionpdt_id integer
cat_id INTEGER
);
CREATE TABLE IF NOT EXISTS commandehaveextrasauces (
commande_id integer,
item_id integer
);
CREATE TABLE IF NOT EXISTS commandehavesauces (
commande_id integer,
item_id integer
);
CREATE TABLE IF NOT EXISTS flavors(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    description TEXT, 
    url TEXT
);

CREATE TABLE IF NOT EXISTS menuitems(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
type text,
    prix float
);
CREATE TABLE IF NOT EXISTS menus(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    description TEXT, 
prix float,
    url TEXT,
    type text,
myorder integer,
cat_id INTEGER
);

CREATE TABLE IF NOT EXISTS menucats(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    description TEXT, 
    url TEXT
);
CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    description TEXT,
    url TEXT,
firstcat_id INTEGER
);

CREATE TABLE IF NOT EXISTS mcdodates(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dates integer, 
    image TEXT, 
    text TEXT
);

CREATE TABLE IF NOT EXISTS firstcats(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    image TEXT, 
    url TEXT
);


INSERT INTO flavors(id, name, url,image) VALUES (1, 'Burgers', 'burgers',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (2, 'Collation', 'snacks',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (3, 'Happy Meal', 'happy-meal',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (4, 'Salade', 'salads',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (5, 'Dessert', 'desserts-milkshakes-',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (6, 'McDo Café', 'mcd-cafe',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (7, 'Petits-déjeuners', 'breakfasts',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (8, 'Breuvage', 'drinks',"/assets/images/happymealcat.jpg");
INSERT INTO flavors(id, name, url,image) VALUES (9, 'Sauces', 'sauces',"/assets/images/happymealcat.jpg");

INSERT INTO items(id, name,description, url,image,cat_id) VALUES (1, 'sundae','Avec 3 délicieuses saveurs...', 'sundae','sundae',5);
INSERT INTO items(id, name,description, url,image,cat_id) VALUES (2, 'happy meal','burger, tomates..','happymeal', '/assets/images/happymeal.jpg',3);

INSERT INTO menucats(id, name, url,image,description) VALUES (1, 'Menus partagées', 'menuspartage',"/assets/images/happymealcat.jpg","description");
INSERT INTO menucats(id, name, url,image,description) VALUES (2, 'Menus', 'menus',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (3, 'Menus enfants', 'menuenfant',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (4, 'Produits uniques', 'produitunique',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (5, 'Desserts', 'desserts',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (6, 'Breuvages', 'breuvages',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (7, 'Collations', 'colaltion',"/assets/images/happymealcat.jpg","");
INSERT INTO menucats(id, name, url,image,description) VALUES (8, 'Sauces supplémentaires', 'sauces',"/assets/images/happymealcat.jpg","");

INSERT INTO menus(id, name,prix,description, url,image,cat_id,type,myorder) VALUES (1, 'Menu BigMaç','160.00','2 Big Mac® + 4 morceaux de poulet McNuggets + 1 pomme de terre moyenne + 1 litre de boisson','happymeal', '/assets/images/happymeal.jpg',1,'restaurant',0);
INSERT INTO menus(id, name,prix,description, url,image,cat_id,type,myorder) VALUES (2, 'Menu de restes de poulet croustillant','110.00','4 morceaux de poulet croustillant extra burger + 1 morceau de grosse pomme de terre + 2 morceaux de boisson de taille moyenne','happymeal1', '/assets/images/happymeal.jpg',2,'service de forfait',1);
INSERT INTO menus(id, name,prix,description, url,image,cat_id,type,myorder) VALUES (3, 'Menu BigMaç','160.00','2 Big Mac® + 4 morceaux de poulet McNuggets + 1 pomme de terre moyenne + 1 litre de boisson','happymeal', '/assets/images/happymeal.jpg',1,'restaurant',0);
INSERT INTO menus(id, name,prix,description, url,image,cat_id,type,myorder) VALUES (4, 'Menu de restes de poulet croustillant','110.00','4 morceaux de poulet croustillant extra burger + 1 morceau de grosse pomme de terre + 2 morceaux de boisson de taille moyenne','happymeal2', '/assets/images/happymeal.jpg',2,'restaurant',0);

INSERT INTO menuitems(name,prix,type,image) VALUES ("coca", 30.00,"boisson","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("sprite", 30.00,"boisson","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("fanta", 30.00,"boisson","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("mayonnaise", 30.00,"sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("ketchup", 30.00,"sauce","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("frites mcdo", 30.00,"accompagnement","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("frites mcdo speciales", 30.00,"accompagnement","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("chicken mcbites", 30.00,"promotion","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("beignet calamar", 30.00,"promotion","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("chicken mcnuggets 6 portions", 30.00,"promotion","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("cheeseburger", 30.00,"promotion","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("beigneit de calamar", 30.00,"promotion","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("mcnuggets 9 portions", 30.00,"promotion","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("2'li mc flurry", 30.00,"promotion dessert","");


INSERT INTO menuitems(name,prix,type,image) VALUES ("donut", 30.00,"promotion dessert","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("McFlurry™ - Böğürtlen ", 20.00,"promotion dessert","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("McFlurry™ - Sade ", 20.00,"promotion dessert","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("McFlurry™ - Bonibon ", 20.00,"promotion dessert","");

INSERT INTO menuitems(name,prix,type,image) VALUES ("churros (sauce chocolat) ", 20.00,"promotion dessert","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("churros (sauce caramel) ", 20.00,"promotion dessert","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("2x2 sauce (2 Buffalo + 2 Ranch)", 10.00,"extra sauce","");



INSERT INTO menuitems(name,prix,type,image) VALUES ("Karma sauce 1 Barbecue + 1 Buffalo + 1 moutarde + 1 Ranch", 10.00,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("ranch sauce", 3.50,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("barbecue sauce", 3.50,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("buffalo sauce", 10.00,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("moutarde sauce ", 10.00,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("ketchup", 2.50,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("mayonnaise", 2.50,"extra sauce","");
INSERT INTO menuitems(name,prix,type,image) VALUES ("2x2 sauce (2 Buffalo + 2 Ranch)", 10.00,"extra sauce","");




