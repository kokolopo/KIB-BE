import express from "express";
import kuasaController from "../controllers/kuasa_controller.js";

const kuasa = express.Router();

kuasa.get("/:departemen_id", kuasaController.getKuasa);

export default kuasa;
