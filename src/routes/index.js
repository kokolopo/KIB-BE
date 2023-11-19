import express from "express";
import departemen from "./departemen.js";
import penetapan from "./penetapan.js";
import kategori from "./kategori.js";
import satuan from "./satuan.js";
import kecamatan from "./kecamatan.js";
import kelurahan from "./kelurahan.js";

const routes = express.Router();

routes.use("/departements", departemen);
routes.use("/penetapan", penetapan);
routes.use("/kategori", kategori);
routes.use("/satuan", satuan);
routes.use("/kecamatan", kecamatan);
routes.use("/kelurahan", kelurahan);

export default routes;
