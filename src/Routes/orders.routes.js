const { Router } = require("express");
const router = Router();
const { Prueba } = require("../Controllers/orders.controllers");

router.get("/", Prueba);
module.exports =router;