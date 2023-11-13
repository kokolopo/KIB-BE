import express from "express";
import departemen from "./departemen.js";
import penetapan from "./penetapan.js";
import kategori from "./kategori.js";

const routes = express.Router();

routes.use("/departements", departemen);
routes.use("/penetapan", penetapan);
routes.use("/kategori", kategori);

export default routes;
