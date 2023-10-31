import express from "express";
import departemen from "./departemen";

const routes = express.Router();

routes.use("/departements", departemen);

export default routes;
