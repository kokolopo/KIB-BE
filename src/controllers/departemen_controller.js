import { responseAPI } from "../helper/response_api.js";
import departemenModel from "../models/departemen_model.js";

const { fetchAll } = departemenModel;

const departemenController = {
  getAll: async (req, res) => {
    try {
      const departemens = await fetchAll();
      res.status(200).json(responseAPI("list departemens", departemens));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil resep!", error });
    }
  },
};

export default departemenController;
