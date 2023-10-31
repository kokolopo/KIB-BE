import express from "express";
import departemen from "./departemen.js";

const routes = express.Router();

routes.use("/departements", departemen);

export default routes;
