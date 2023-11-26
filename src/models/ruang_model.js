import DB from "../config/db.js";

const ruangModel = {
    fetchAll: (id_departemen) => {
        let query = `
            SELECT
                r.nama as ruang_nm
            FROM 
                aset.ruangs AS r
            WHERE
                departemen_id = ${id_departemen}
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
