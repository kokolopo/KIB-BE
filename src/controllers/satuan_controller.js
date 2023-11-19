import { responseAPI } from "../helper/response_api.js";
import satuanModel from "../models/satuan_model.js";

const { fetchAll } = satuanModel;

const satuanController = {
    getAll: async (req, res) => {
        try {
        const satuan = await fetchAll();
        res.status(200).json(responseAPI("list satuan", satuan));
        } catch (error) {
        res.status(400).json({ msg: "gagal mengambil satuan!", error });
        }
    },
};

export default satuanController;
