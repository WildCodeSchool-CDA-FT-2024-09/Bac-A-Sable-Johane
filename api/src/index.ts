import express from "express";
import router from "./router";
import {dataSource } from "./db/client"
import "reflect-metadata"; 

const app = express();

app.use(express.json())

app.use("/api", router)

app.listen(3001, async() => {
    await dataSource.initialize()
    console.log(`server is listening on http://localhost:3001`);
});