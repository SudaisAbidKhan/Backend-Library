import express from 'express'
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import libraryRoute from './router/libraryRoute.js';

const app = express();
connectDB();

const port = process.env.PORT || 4000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/book", libraryRoute)


app.listen(port, () => console.log(`Server started on PORT:${port}`));

