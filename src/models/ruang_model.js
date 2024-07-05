import DB from "../config/db.js";

const ruangModel = {
  fetchAll: (id_departemen) => {
    let query = `
            select r.id, r.kode, r.nama
            from aset.ruangs r
            join departemen d on d.id=r.departemen_id
            where d.kode = '${id_departemen}'
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default ruangModel;
