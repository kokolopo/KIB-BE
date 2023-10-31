import DB from "../config/db.js";

const penetapanModel = {
  fetchByDepartemen: (idDepartemen, idKategori = 0) => {
    let query = `
            SELECT * FROM aset.penetapan
            WHERE departemen_id = ${idDepartemen}
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default penetapanModel;
