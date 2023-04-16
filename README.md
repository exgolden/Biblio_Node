# Biblio_Node
V2 de mi primer intento de un sistema de gestion para bibliotecas

<ol>
    <li>Crear archivo package: <em>npm init -y</em></li>
    <li>Descargar Express: <em>npm i express</em></li>
    <li>Descargar los drivers para Postgres: <em>npm i pg</em></li>
    <li>Descargar los Nodemon solo para desarrollo: <em>npm i nodemon -D</em></li>
    <li>Script para correr el server en package.json.scripts:<em>"start":"nodemon src/index.js"</em></li>
    <li>Creamos carpeta Controllers para comstruir las rutas
        <ul>
            <li>Creamos: <em>users.controllers.js</em></li>
            <li>Creamos: <em>books.controllers.js</em></li>
            <li>Creamos: <em>orders.controllers.js</em></li>
        </ul>
    </li>
    <li>Creamos carpeta Routes para enlistar nuestras rutas
        <ul>
            <li>Creamos: <em>users.routes.js</em></li>
            <li>Creamos: <em>books.routes.js</em></li>
            <li>Creamos: <em>orders.routes.js</em></li>
        </ul>
    </li>
    <li>Definimos nuestro servidor en index.js:
            <p>const express = require("express");</p>
            <p>const app = express();</p>
            <p>app.use(express.json());</p>
            <p>app.use(express.urlencoded({extended: false}));</p>
            <p>app.listen(4000);</p>
            <p>console.log("server on port 4000");</p>
    </li>
    <li>Corremos el servidor: <em>npm run start</em></li>
    <li>Creamos carpeta db para inicializar las bases de datos:
        <ol>
            <li>Nos conectamos a postgres por una terminal independiente <em>sudo -u postgres psql</em></li>
            <li>Creamos la base de datos: <em>CREATE DATABASE biblio;</em></li>
            <li>Para enlistar las bases usamos "\l"</li>
            <li>Nos movemos biblio mediante: "\c biblio"</li>
            <li>Creamos cada tabla con los comandos dentro de:
                <ul>
                    <li>books.database.sql</li>
                    <li>orders.database.sql</li>
                    <li>users.database.sql</li>
                <ul>
            </li>
        </ol>
    </li>
</ol>
