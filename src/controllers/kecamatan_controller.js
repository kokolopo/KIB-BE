import { responseAPI } from "../helper/response_api.js";
import kecamatanModel from "../models/kecamatan_model.js";

const { fetchAll } = kecamatanModel;

const kecamatanController = {
    getAll: async (req, res) => {
        try {
        const kecamatan = await fetchAll();
        res.status(200).json(responseAPI("list kecamatan", kecamatan));
        } catch (error) {
        res.status(400).json({ msg: "gagal mengambil kecamatan!", error });
        }
    },
};

export default kecamatanController;
