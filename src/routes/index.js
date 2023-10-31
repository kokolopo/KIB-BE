import express from "express";
import departemen from "./departemen.js";
import penetapan from "./penetapan.js";

const routes = express.Router();

routes.use("/departements", departemen);
routes.use("/penetapan", penetapan);

export default routes;
