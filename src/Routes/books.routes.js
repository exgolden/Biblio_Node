const { Router } = require("express");
const router = Router();
const { Prueba } = require("../Controllers/books.controllers");

router.get("/", Prueba);
module.exports =router;