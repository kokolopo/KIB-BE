import DB from "../config/db.js";

const penetapanModel = {
  fetchDataById: (id) => {
    let query = `
      SELECT aset.penetapan.*, public.departemen.kode, public.departemen.nama, aset.kategoris.kode AS barang, aset.kategoris.nama AS nama_barang
      FROM aset.penetapan
      JOIN public.departemen ON aset.penetapan.departemen_id = public.departemen.id
      JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
      WHERE aset.penetapan.id = ${id}
    `;

    // let query = `select *, TO_CHAR(tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated from aset.penetapan WHERE aset.penetapan.id = ${id}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  fetchTanahByDepartemen: (idDepartemen, perPage = 10, page = 1) => {
    const offset = (page - 1) * perPage;
    let query = `
          SELECT aset.penetapan.*, aset.kategoris.nama
          FROM aset.penetapan
          JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
          WHERE departemen_id = ${idDepartemen} AND aset.kategoris.nama LIKE 'Tanah%' AND thn_nilai = 2022
        `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchPeralatanMesinAlatByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1
  ) => {
    const offset = (page - 1) * perPage;
    let query = `
          SELECT aset.penetapan.*, TO_CHAR(tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated, aset.kategoris.nama
          FROM aset.penetapan
          JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
          WHERE departemen_id = ${idDepartemen}
          AND aset.kategoris.nama LIKE 'Mesin%' OR nama LIKE 'Peralatan%' OR nama LIKE 'Alat%' AND thn_nilai = 2022
        `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default penetapanModel;
