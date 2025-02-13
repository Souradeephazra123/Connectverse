import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { mongoConnect } from "./utils/connectToMongoDB.js";
import AuthRouter from "./routes/auth.routes.js";
import EventRouter from "./routes/event.routes.js";
import EmailRouter from "./routes/email.routes.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", AuthRouter);
app.use("/api", EventRouter);
app.use("/", EmailRouter);


async function serverConnect() {
  await mongoConnect();
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

serverConnect();
