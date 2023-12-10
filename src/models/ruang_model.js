import DB from "../config/db.js";

const ruangModel = {
    fetchAll: (id_departemen) => {
        let query = `
            SELECT DISTINCT
                r.id as ruang_id,
                r.kode as ruang_kd,
                r.nama as ruang_nm
            FROM 
                aset.ruangs AS r
                LEFT JOIN aset.penetapan p ON p.b_kd_ruang = r.id
            WHERE
                r.departemen_id = ${id_departemen}
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
