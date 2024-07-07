import express from "express";
import router from "./src/routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotEnv.config();

const port = 5000;
const app = express();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("combined"));

// Static folder to serve images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(router);

app.listen(port, () => console.log(`run and serve on port : ${port}`));
