import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { connectDB } from "../src/config/db.js";

const app = express();
const PORT = 8000;

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

const start = async () => {
  app.listen(PORT, () => {
    console.log(`APP LISTENING ON ${PORT}`);
    connectDB();
  });
};

start();
