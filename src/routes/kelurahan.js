import express from "express";
import kelurahanController from "../controllers/kelurahan_controller.js";

const kelurahan = express.Router();

kelurahan.get("/", kelurahanController.getAll);

export default kelurahan;
