import { responseAPI } from "../helper/response_api.js";
import ruangModel from "../models/ruang_model.js";

const { fetchAll } = ruangModel;

const ruangController = {
    getAll: async (req, res) => {
        const { id_departemen } = req.params
        try {
            const ruang = await fetchAll(parseInt(id_departemen));
            res.status(200).json(responseAPI("list ruang", ruang));
        } catch (error) {
            res.status(400).json({ msg: "gagal mengambil ruang!", error });
        }
    },
};

export default ruangController;
