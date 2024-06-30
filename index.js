require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./src/config/db");
const prendasRouter = require("./src/api/routes/prendas");
const tiposRouter = require("./src/api/routes/tipos");

const app = express();
app.use(express.json());


connectDB();


app.use("/api/v1/tipos", tiposRouter);
app.use("/api/v1/ropa", prendasRouter);




app.use("*", (req, res, next) => {
    return res.status(404).json("Not Found :(");
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
})