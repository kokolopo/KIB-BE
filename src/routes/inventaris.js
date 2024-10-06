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
inventaris.post(
  "/add/RB/:penetapan_id",
  inventarisController.insertInventarisB
);
inventaris.post(
  "/add/TGR/:penetapan_id",
  inventarisController.insertInventarisB
);
inventaris.post(
  "/add/EC/:penetapan_id",
  inventarisController.insertInventarisB
);

// UPLOAD IMAGE
inventaris.post("/docs/:id_inventaris", inventarisController.uploadImage);

// Select KIBS
inventaris.get(
  "/kibs/:kodeDepartemen/:kodeKategori",
  inventarisController.selectKIBS
);

// update status inventaris
inventaris.put("/status/:id_inv", inventarisController.upadateStatusInventaris);

export default inventaris;
