import express from "express";
import penetapanController from "../controllers/penetapan_controller.js";

const penetapan = express.Router();

penetapan.get("/inventaris/:kategori/:id", penetapanController.getInventarisById);

penetapan.get(
  "/:id_departemen/:kategori",
  penetapanController.getInventarisByDepartemen
);

export default penetapan;