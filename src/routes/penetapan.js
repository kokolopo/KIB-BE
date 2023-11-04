import express from "express";
import penetapanController from "../controllers/penetapan_controller.js";

const penetapan = express.Router();

penetapan.get("/:id", penetapanController.getDataPenetapanById);

penetapan.get(
  "/:id_departemen/tanah",
  penetapanController.getTanahByDepartemen
);

penetapan.get(
  "/:id_departemen/perkakas",
  penetapanController.getPerkakasByDepartemen
);

export default penetapan;
