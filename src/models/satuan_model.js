import DB from "../config/db.js";

const satuanModel = {
    fetchAll: () => {
        let query = `
            SELECT 
                s.kode as satuan_kd
            FROM 
                aset.satuan AS s
        `;

        return new Promise((resolve, reject) => {
        DB.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result.rows);
        });
        });
    },
};

export default satuanModel;
