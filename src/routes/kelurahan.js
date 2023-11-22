import express from "express";
import kelurahanController from "../controllers/kelurahan_controller.js";

const kelurahan = express.Router();

kelurahan.get("/:id_kecamatan", kelurahanController.getAll);

export default kelurahan;
