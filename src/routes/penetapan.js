import express from "express";
import penetapanController from "../controllers/penetapan_controller";

const penetapan = express.Router();

penetapan.get("/:id_departemen", penetapanController.getByDepartemen);

export default penetapan;
