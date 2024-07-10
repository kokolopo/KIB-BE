import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";
import penetapanModel from "../models/penetapan_model.js";
import { upload } from "../utils/multer.js";

const {
  insertInventarisA,
  insertInventarisB,
  insertInventarisC,
  insertInventarisD,
  insertInventarisE,
  updateInventarisA,
  updateInventarisB,
  updateInventarisC,
  updateInventarisD,
  updateInventarisE,
  SelectKIBS,
} = inventarisModel;

const { countTotalPage } = penetapanModel;

const inventarisController = {
  // INSERT CONTROLLER
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

  insertInventarisC: async (req, res) => {
    const { data } = req.body;
    try {
      await insertInventarisC(data);
      res.status(201).json(responseAPI("Berhasil inventarisasi data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisD: async (req, res) => {
    const { data } = req.body;
    try {
      await insertInventarisD(data);
      res.status(201).json(responseAPI("Berhasil inventarisasi data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisE: async (req, res) => {
    const { data } = req.body;
    try {
      await insertInventarisE(data);
      res.status(201).json(responseAPI("Berhasil inventarisasi data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  // UPDATE CONTROLLER
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

  updateInventarisC: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisC(kib_id, data);
      res.status(200).json(responseAPI("Berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal update data!", error });
    }
  },

  updateInventarisD: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisD(kib_id, data);
      res.status(200).json(responseAPI("Berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal update data!", error });
    }
  },

  updateInventarisE: async (req, res) => {
    const { kib_id } = req.params;
    const { data } = req.body;
    try {
      await updateInventarisE(kib_id, data);
      res.status(200).json(responseAPI("Berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "Gagal update data!", error });
    }
  },

  uploadImage: async (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.status(400).send({ message: err });
      } else {
        if (req.file == undefined) {
          res.status(400).send({ message: "No file selected!" });
        } else {
          res.status(200).send({
            message: "File uploaded successfully!",
            file: `uploads/${req.file.filename}`,
          });
        }
      }
    });
  },

  // Select KIBS
  selectKIBS: async (req, res) => {
    const { kodeDepartemen, kodeKategori } = req.params;
    const { perPage, page, tahun } = req.query;

    try {
      let data, total_page;
      data = await SelectKIBS(
        kodeDepartemen,
        kodeKategori,
        perPage,
        page,
        tahun
      );
      total_page = await countTotalPage(
        kodeKategori,
        kodeDepartemen,
        perPage,
        tahun
      );

      res.status(200).json(responseAPI("list kibs", data, total_page));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },
};

export default inventarisController;
