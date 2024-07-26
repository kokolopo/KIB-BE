import initModels from "../../models/init-models.js";
import sequelize from "../config/sequelize.js";
import { requestBodyInventarisA } from "../dto/index.js";
import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";
import penetapanModel from "../models/penetapan_model.js";
import { upload } from "../utils/multer.js";
import { promisify } from "util";

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
const jakartaOffset = 7 * 60 * 60 * 1000; // Jakarta UTC+7
const jakartaTime = new Date(Date.now() + jakartaOffset);

const inventarisController = {
  // INSERT CONTROLLER
  insertInventarisA: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;

    const body = requestBodyInventarisA;

    if (id_inventaris != undefined) {
      body.updated = body.created;
    }

    for (let key in req.body) {
      if (req.body[key] == null || req.body[key] == 0) {
        continue;
      } else {
        body[key] = req.body[key];
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        body.id = prev === null ? 1 : prev.id + 1;
        body.created = jakartaTime;
        body.penetapan_id = parseInt(penetapan_id);

        await initModels(sequelize).inventaris_kib.create(body);
      } else {
        // update
        body.updated = body.created;
        delete body.created;
        await initModels(sequelize).inventaris_kib.update(body, {
          where: { id: parseInt(id_inventaris) },
        });
      }

      res.status(201).json(responseAPI("Berhasil inventarisasi data", body));
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
    const { id_inventaris } = req.params;
    let inv;
    let files;
    let fileNames;
    const uploadAsync = promisify(upload);

    try {
      inv = await initModels(sequelize).inventaris_kib.findByPk(id_inventaris);
      if (inv === null) {
        return res.status(400).send({ message: "Tidak ada data inventaris" });
      } else {
        files = inv.file_nm;
      }

      await uploadAsync(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "No file selected!" });
      } else {
        fileNames = req.files.map((file) => file.filename);
      }

      fileNames.forEach((v) => {
        files.push(v);
      });

      await initModels(sequelize).inventaris_kib.update(
        { file_nm: files }, // Mengubah array menjadi string untuk penyimpanan di DB
        {
          where: { id: parseInt(id_inventaris) },
        }
      );

      res
        .status(200)
        .send({
          message: "File uploaded and database updated successfully!",
          files: files,
        });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "An error occurred", error: err.message });
    }
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
