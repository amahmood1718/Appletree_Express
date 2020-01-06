const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")

const orderRoutes = require("./server/routes/orders.js")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to db")
})
app.use(express.static(__dirname + "/public"))

app.use("/orders", orderRoutes)

//Run server
app.listen(3000, () => {
    console.log("Listening on port 3000")
})