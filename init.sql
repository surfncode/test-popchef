
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

