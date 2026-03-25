import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

import { createServer } from "node:http";
import { connectDB } from "../src/config/db.js";
import { connectSocket } from "./controllers/socketManager.controller.js";

const PORT = process.env.PORT;
const app = express();
const server = createServer(app);
const io = connectSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  server.listen(app.get("port"), () => {
    console.log(`APP LISTENING ON ${PORT}`);
    connectDB();
  });
};

start();
