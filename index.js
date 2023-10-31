import express from "express";
import router from "./src/routes";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";

dotEnv.config();

const port = 5000;
const app = express();

app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);

app.listen(port, () => console.log(`run and serve on port : ${port}`));
