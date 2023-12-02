import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";

const {
  updateInventarisA,
  updateInventarisB,
  insertInventarisA,
  insertInventarisB,
} = inventarisModel;

const inventarisController = {
  // UPDATE METHOD
  updateInventarisA: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisA(kib_id, data);
      res.status(200).json(responseAPI("Berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal update data!", error });
    }
  },

  updateInventarisB: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisB(kib_id, data);
      res.status(200).json(responseAPI("Berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal update data!", error });
    }
  },

  // INSERT METHOD
  insertInventarisA: async (req, res) => {
    const { data } = req.body;
    try {
      await insertInventarisA(data);
      res.status(201).json(responseAPI("Berhasil inventarisasi data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisB: async (req, res) => {
    const { data } = req.body;
    try {
      await insertInventarisB(data);
      res.status(201).json(responseAPI("Berhasil inventarisasi data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },
};

export default inventarisController;
