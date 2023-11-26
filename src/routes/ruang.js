import express from "express";
import ruangController from "../controllers/ruang_controller.js";

const ruang = express.Router();

ruang.get("/:id_departemen", ruangController.getAll);

export default ruang;
