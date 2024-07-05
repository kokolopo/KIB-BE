import DB from "../config/db.js";

const kuasaModel = {
  fetchKuasa: (departemen_id) => {
    let query = `
        SELECT
            p.nama,
        p.kode,
        j.nama,
        d.nama as departemen
        FROM
            partner as p
        JOIN 
            partner_departemen as pd ON p.id = pd.partner_id
        JOIN
            jabatan as j ON pd.jabatan_id = j.id
        JOIN
            departemen as d ON pd.departemen_id = d.id
        WHERE
            d.kode = '${departemen_id}'
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default kuasaModel;
