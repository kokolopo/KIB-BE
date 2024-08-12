import initModels from "../../models/init-models.js";
import sequelize from "../config/sequelize.js";
import { requestBodyInventarisA } from "../dto/index.js";
import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";
import penetapanModel from "../models/penetapan_model.js";
import { upload } from "../utils/multer.js";
import { promisify } from "util";

const { SelectKIBS } = inventarisModel;

const { countTotalPage } = penetapanModel;
const jakartaOffset = 7 * 60 * 60 * 1000; // Jakarta UTC+7
const jakartaTime = new Date(Date.now() + jakartaOffset);
const year = jakartaTime.getUTCFullYear();

const inventarisController = {
  // INSERT CONTROLLER
  insertInventarisA: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;

    const body = requestBodyInventarisA;

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "" || req.body[key] == 0) {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;
        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);
        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisB: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;
    const keys = [
      "penggunaan_status",
      "penggunaan_barang_pemda_status",
      "penggunaan_barang_pempus_status",
      "penggunaan_barang_pdl_status",
      "penggunaan_barang_pl_status",
    ];

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;

        keys.forEach((key) => {
          req.body[key] = req.body[key] || 0;
        });

        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);

        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisC: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;
    const keys = [
      "penggunaan_status",
      "penggunaan_barang_pemda_status",
      "penggunaan_barang_pempus_status",
      "penggunaan_barang_pdl_status",
      "penggunaan_barang_pl_status",
    ];

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;

        keys.forEach((key) => {
          req.body[key] = req.body[key] || 0;
        });

        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);

        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisD: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;
    const keys = [
      "penggunaan_status",
      "penggunaan_barang_pemda_status",
      "penggunaan_barang_pempus_status",
      "penggunaan_barang_pdl_status",
      "penggunaan_barang_pl_status",
    ];

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;

        keys.forEach((key) => {
          req.body[key] = req.body[key] || 0;
        });

        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);

        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisE: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;
    const keys = [
      "penggunaan_status",
      "penggunaan_barang_pemda_status",
      "penggunaan_barang_pempus_status",
      "penggunaan_barang_pdl_status",
      "penggunaan_barang_pl_status",
    ];

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;

        keys.forEach((key) => {
          req.body[key] = req.body[key] || 0;
        });

        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);

        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  insertInventarisATB: async (req, res) => {
    const penetapan_id = req.params.penetapan_id;
    const { id_inventaris } = req.query;
    let inv_id;
    const keys = [
      "penggunaan_status",
      "penggunaan_barang_pemda_status",
      "penggunaan_barang_pempus_status",
      "penggunaan_barang_pdl_status",
      "penggunaan_barang_pl_status",
    ];

    if (id_inventaris != undefined) {
      req.body.updated = jakartaTime;
    }

    for (let key in req.body) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    }

    try {
      if (id_inventaris == undefined) {
        // create new
        const prev = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        });

        req.body.id = prev === null ? 1 : prev.id + 1;

        keys.forEach((key) => {
          req.body[key] = req.body[key] || 0;
        });

        req.body.created = jakartaTime;
        req.body.tahun = year;
        req.body.penetapan_id = parseInt(penetapan_id);

        req.body.status = 0;
        req.body.is_api = 0;
        if (req.body.petugas == null || req.body.petugas == []) {
          req.body.petugas = [];
        }

        await initModels(sequelize).inventaris_kib.create(req.body);

        const penetapan = await initModels(sequelize).penetapan.findByPk(
          parseInt(penetapan_id)
        );

        await initModels(sequelize).inventaris_kib.update(
          { file_nm: penetapan.file_nm == null ? [] : penetapan.file_nm },
          {
            where: { id: req.body.id },
          }
        );

        inv_id = req.body.id;
      } else {
        // file_name
        const file_name = await initModels(sequelize).inventaris_kib.findOne({
          attributes: ["file_nm"],
          where: { id: parseInt(id_inventaris) },
        });

        // update

        req.body.file_nm = file_name.dataValues.file_nm;
        delete req.body.created;
        await initModels(sequelize).inventaris_kib.update(req.body, {
          where: { id: parseInt(id_inventaris) },
        });
        inv_id = parseInt(id_inventaris);
      }

      res.status(201).json(
        responseAPI("Berhasil inventarisasi data", {
          penetapan_id,
          inv_id,
        })
      );
    } catch (error) {
      res.status(400).json({ msg: "Gagal inventarisasi data!", error });
    }
  },

  // upload image
  uploadImage: async (req, res) => {
    const { id_inventaris } = req.params;
    let inv;
    let files;
    let fileNames;
    let prevUID;
    const uploadAsync = promisify(upload);

    try {
      // find data inventaris by PK
      inv = await initModels(sequelize).inventaris_kib.findByPk(id_inventaris);

      // validation if data not found
      if (inv === null) {
        return res.status(400).send({ message: "Tidak ada data inventaris" });
      } else {
        // fetch file
        files = inv.file_nm;
      }

      prevUID = files.length;

      await uploadAsync(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "No file selected!" });
      } else {
        fileNames = req.files.map((file) => file.filename);
      }

      fileNames.forEach((v) => {
        prevUID = prevUID + 1;
        files.push({
          uid: prevUID,
          filename: v,
        });
      });

      await initModels(sequelize).inventaris_kib.update(
        { file_nm: files }, // Mengubah array menjadi string untuk penyimpanan di DB
        {
          where: { id: parseInt(id_inventaris) },
        }
      );

      res.status(200).send({
        message: "File uploaded and database updated successfully!",
        files: fileNames,
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
