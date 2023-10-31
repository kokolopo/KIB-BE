import DB from "../config/db.js";

const kategoriModel = {
  fetchByName: (name) => {
    let query = `
        SELECT aset.kategoris.nama, aset.kategoris.id
        FROM aset.kategoris
        WHERE nama LIKE '${name}%'
        GROUP BY nama, id;
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default kategoriModel;
