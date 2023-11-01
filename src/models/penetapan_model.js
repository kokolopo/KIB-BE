import DB from "../config/db.js";

const penetapanModel = {
  fetchTanahByDepartemen: (idDepartemen, perPage = 10, page = 1) => {
    const offset = (page - 1) * perPage;
    let query = `
          SELECT aset.penetapan.*, aset.kategoris.nama
          FROM aset.penetapan
          JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
          WHERE departemen_id = ${idDepartemen} AND aset.kategoris.nama LIKE 'Tanah% AND thn_nilai = 2022'
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
          SELECT aset.penetapan.*, aset.kategoris.nama
          FROM aset.penetapan
          JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
          WHERE departemen_id = ${idDepartemen}
          AND aset.kategoris.nama LIKE 'Mesin%' OR nama LIKE 'Peralatan%' OR nama LIKE 'Alat% AND thn_nilai = 2022'
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
