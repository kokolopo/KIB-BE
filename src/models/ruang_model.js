import DB from "../config/db.js";

const ruangModel = {
    fetchAll: () => {
        let query = `
            SELECT 
                r.kode as ruang_kd,
                r.nama as ruang_nm
            FROM 
                aset.ruangs AS r
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
