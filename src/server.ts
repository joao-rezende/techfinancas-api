import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

mongoose.connect("mongodb://localhost/techfinancas")

app.use(express.json());
app.use(routes);

app.listen(3001, () => {
    console.log("Server is listening");
    console.log("Open http://localhost:3001");
})