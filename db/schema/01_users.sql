-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS orders
CASCADE;
DROP TABLE IF EXISTS ordered_items
CASCADE;
DROP TABLE IF EXISTS menu_items
CASCADE;



CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR (255) NOT NULL
);



CREATE TABLE orders
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  order_placed_at TIMESTAMP NOT NULL,
  special_instructions TEXT,
  order_ready_duration INTEGER NOT NULL,
  order_ready BOOLEAN NOT NULL DEFAULT FALSE,
  order_complete_at TIMESTAMP NOT NULL,
  order_total as INTEGER
);


CREATE TABLE ordered_items
(
  id SERIAL PRIMARY KEY NOT NULL,

);
