import express from "express";
// import "express-async-error";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { getServerHost, getServerPort } from "./config/env.js";

const server = express();

server.use(cors({ origin: "http://localhost:5173" }));
server.use(bodyParser.json());

server.use("/auth", authRoutes);
server.use("/products", productRoutes);
server.use("/orders", orderRoutes);
server.use("/admin", adminRoutes);

// server.use("*", (req, res, next) => {
//   res.send("something went wrong");
// });

const port = getServerPort();

async function connection() {
  try {
    await pool.connect();
    server.listen(port, getServerHost(), () =>
      console.log(`server connected at port ${port} and database connected`)
    );
  } catch (error: any) {
    console.error(error.message);
    // process.exit(1)
  }
}

connection();
