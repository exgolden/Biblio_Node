const express = require("express");
const usersRoutes = require("./Routes/users.routes");
const booksRoutes = require("./Routes/books.routes");
const ordersRoutes = require("./Routes/orders.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Pre-rutas
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/orders", ordersRoutes);
app.listen(4000);
console.log("Server on port 4000");