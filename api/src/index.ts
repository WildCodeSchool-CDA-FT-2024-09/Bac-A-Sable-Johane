import express from "express";
import router from "./router";
import * as dotenv from "dotenv";
import cors from "cors";
import { dataSource } from "./db/client";
import "reflect-metadata";
dotenv.config();

const { API_URL } = process.env;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL  as string
  })
);

app.use(express.json());



app.use('/api', router);

app.listen(API_URL , async () => {
  await dataSource.initialize();
  console.log(`Serveur is listenning on http://localhost:${API_URL }`);
});