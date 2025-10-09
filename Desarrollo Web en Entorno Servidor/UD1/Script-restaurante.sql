CREATE TABLE cliente (
	id serial PRIMARY KEY,
	nombre varchar(100),
	apellidos varchar(100),
	email varchar(200),
	telefono varchar(50)
);
	
CREATE TABLE mesa (
	id serial PRIMARY KEY,
	num_mesa int
);

CREATE TABLE pedido (
	id serial PRIMARY KEY,
	id_cliente int,
	id_mesa int,
	precio_total numeric(5,2),
	CONSTRAINT "fk_pedido_cliente" FOREIGN KEY (id_cliente) REFERENCES cliente(id),
	CONSTRAINT "fk_pedido_mesa" FOREIGN KEY (id_mesa) REFERENCES mesa(id)
);

CREATE TABLE plato (
	id serial PRIMARY KEY,
	nombre varchar(100),
	precio numeric(5,2),
	ingredientes text
);

CREATE TABLE linea_pedido (
	id serial PRIMARY KEY,
	id_pedido int,
	id_plato int,
	cantidad int,
	subtotal numeric(5,2),
	CONSTRAINT "fk_pedido_pedido" FOREIGN KEY (id_pedido) REFERENCES pedido(id),
	CONSTRAINT "fk_pedido_plato" FOREIGN KEY (id_plato) REFERENCES plato(id)
);