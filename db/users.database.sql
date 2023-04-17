CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    escuela VARCHAR(40) NOT NULL,
    boleta VARCHAR(10) NOT NULL,
    email TEXT,
    telefono TEXT,
    contraseña TEXT NOT NULL,
    multa BOOLEAN DEFAULT false,
    super_user BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true
);
--El default de contraseña debe ser la boleta
--Añadimos un admin, esto lo haria si integraramos JWT desde un inicio
--La contraseña no esta encriptada pero esto solo es un ejemplo
INSERT INTO users(nombre, escuela, boleta, email, telefono, contraseña, super_user) VALUES
    ('admin', 'ESFM', '2020330145', 'admin@gmail.com', '5555555555', '2020330145', true);
