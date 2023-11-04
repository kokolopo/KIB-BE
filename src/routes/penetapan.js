import express from "express";
import penetapanController from "../controllers/penetapan_controller.js";

const penetapan = express.Router();

penetapan.get("/:id", penetapanController.getDataPenetapanById);

penetapan.get("/:id_departemen/A", penetapanController.getTanahByDepartemen);

penetapan.get("/:id_departemen/B", penetapanController.getPerkakasByDepartemen);

// penetapan.get(
//   "/:id_departemen/C",
//   penetapanController.getGedungBangunanByDepartemen
// );

// penetapan.get(
//   "/:id_departemen/D",
//   penetapanController.getJalanJaringanIrigasiByDepartemen
// );

// penetapan.get(
//   "/:id_departemen/E",
//   penetapanController.getAsetTetapLainnyaByDepartemen
// );

// penetapan.get("/:id_departemen/F", penetapanController.getKDPByDepartemen);

export default penetapan;
