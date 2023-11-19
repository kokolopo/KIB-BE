import express from "express";
import kecamatanController from "../controllers/kecamatan_controller.js";

const kecamatan = express.Router();

kecamatan.get("/", kecamatanController.getAll);

export default kecamatan;
