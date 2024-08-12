import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

// INSERT ROUTE
inventaris.post("/add/A/:penetapan_id", inventarisController.insertInventarisA);
inventaris.post("/add/B/:penetapan_id", inventarisController.insertInventarisB);
inventaris.post("/add/C/:penetapan_id", inventarisController.insertInventarisC);
inventaris.post("/add/D/:penetapan_id", inventarisController.insertInventarisD);
inventaris.post("/add/E/:penetapan_id", inventarisController.insertInventarisE);
inventaris.post(
  "/add/ATB/:penetapan_id",
  inventarisController.insertInventarisATB
);

// UPLOAD IMAGE
inventaris.post("/docs/:id_inventaris", inventarisController.uploadImage);

// Select KIBS
inventaris.get(
  "/kibs/:kodeDepartemen/:kodeKategori",
  inventarisController.selectKIBS
);

export default inventaris;
