
create table ingredients (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`name` varchar(512) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table dishes (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`name` varchar(512) NOT NULL,
	`description` text,
	`price` double not null default 0,
	`hot` boolean not null default false,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


create table dishIngredients (
	`dishId` bigint(20) NOT NULL,
	`ingredientId` bigint(20) NOT NULL,
	key (`dishId`),
	key (`ingredientId`),
	UNIQUE KEY `dishIngredient` (`dishId`,`ingredientId`),
	CONSTRAINT `dishIngredientsDishIdConstraint` FOREIGN KEY (`dishId`) REFERENCES `dishes` (`id`) ON DELETE CASCADE,
	CONSTRAINT `dishIngredientsIngredientIdConstraint` FOREIGN KEY (`ingredientId`) REFERENCES `ingredients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into ingredients(`name`) values
("Carotte"),
("Huile d'olive"),
("Miel"),
("Vinaigre balsamique blanc"),
("Sel"),
("Poivre"),
("Moutarde"),
("Sucre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre balsamique blanc",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 2, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 3, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 4, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 5, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 6, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 7, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 8, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Miel",
				"Sel",
				"Poivre");

insert into dishes (`name`,`description`,`price`,`hot`) values
(
	"Carottes rôties 9, sauce Grecque aux herbes et graines de courge",
	"Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
	20,
	false
);
set @dishId := LAST_INSERT_ID();
insert into dishIngredients(`dishId`,`ingredientId`)
select @dishId,id from ingredients 
where name in ("Carotte",
				"Huile d'olive",
				"Sel",
				"Poivre");