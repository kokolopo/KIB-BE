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
      res.status(200).json(responseAPI("berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "gagal update data!", error });
    }
  },

  updateInventarisB: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisB(kib_id, data);
      res.status(200).json(responseAPI("berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "gagal update data!", error });
    }
  },

  // INSERT METHOD
  insertInventarisA: async () => {
    const { data } = req.body;
    try {
      await insertInventarisA(data);
      res.status(201).json(responseAPI("berhasil create data"));
    } catch (error) {
      res.status(400).json({ msg: "gagal create data!", error });
    }
  },

  insertInventarisB: async () => {
    const { data } = req.body;

    try {
      await insertInventarisB(data);
      res.status(201).json(responseAPI("berhasil create data"));
    } catch (error) {
      res.status(400).json({ msg: "gagal create data!", error });
    }
  },
};

export default inventarisController;
