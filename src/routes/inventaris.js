import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

// INSERT ROUTE
// inventaris.post("/add/A/:penetapan_id", inventarisController.insertInventarisA);
inventaris.post("/add/B/:penetapan_id", inventarisController.insertInventarisB);
// inventaris.post("/add/C", inventarisController.insertInventarisC);
// inventaris.post("/add/D", inventarisController.insertInventarisD);
// inventaris.post("/add/E", inventarisController.insertInventarisE);

// UPLOAD IMAGE
inventaris.post("/docs/:id_inventaris", inventarisController.uploadImage);

// Select KIBS
inventaris.get(
  "/kibs/:kodeDepartemen/:kodeKategori",
  inventarisController.selectKIBS
);

export default inventaris;
