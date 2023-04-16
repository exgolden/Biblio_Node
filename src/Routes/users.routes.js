const { Router } = require("express");
const router = Router();
const { Prueba } = require("../Controllers/users.controllers");

router.get("/", Prueba);
module.exports =router;