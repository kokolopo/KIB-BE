import DB from "../config/db.js";

const departemenModel = {
  fetchAll: () => {
    let query = `SELECT * FROM public.departemen WHERE level_id = 3`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default departemenModel;
