import express from "express";
import cors from "cors"
import { SERVER_PORT } from "./config/env.js";
import bodyParser from "body-parser";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"


const server = express()

server.use(cors())
server.use(bodyParser.json())


server.use("/auth", authRoutes)
server.use("/products",productRoutes)
server.use("/orders",orderRoutes)
server.use("/admin",adminRoutes)

server.listen(SERVER_PORT, () => {
    console.log(`server connected at port ${SERVER_PORT}`)
})

pool.connect().then(() => {
    console.log("connected db")
}).catch((err) => {
    console.log(err)
})