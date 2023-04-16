const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(4000);
console.log("Server on port 4000");