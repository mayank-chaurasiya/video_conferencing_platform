import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { connectDB } from "../src/config/db.js";

const PORT = process.env.PORT;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("port", process.env.PORT || 8000);
app.get("/home", (req, res) => {
  return res.json({ message: "You are at home!!" });
});

const start = async () => {
  server.listen(app.get("port"), () => {
    console.log(`APP LISTENING ON ${PORT}`);
    connectDB();
  });
};

start();
