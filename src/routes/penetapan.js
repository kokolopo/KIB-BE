import express from "express";
import penetapanController from "../controllers/penetapan_controller.js";

const penetapan = express.Router();

penetapan.get("/:id", penetapanController.getInventarisAById);

penetapan.get(
  "/:id_departemen/:kategori",
  penetapanController.getInventarisByDepartemen
);

export default penetapan;
