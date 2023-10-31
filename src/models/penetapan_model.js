import DB from "../config/db.js";

const penetapanModel = {
  fetchByDepartemen: (idDepartemen, idKategori = 0, perPage = 10, page = 1) => {
    const offset = (page - 1) * perPage;
    let query = `
            SELECT * FROM aset.penetapan
            WHERE departemen_id = ${idDepartemen}
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
