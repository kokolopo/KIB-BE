import DB from "../config/db.js";

const inventarisModel = {
  updateInventarisA: (kib_id, data) => {
    // console.log({kib_id, data});

    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;

    let query = `
    UPDATE 
      aset.kib_inventaris
    SET
      tgl_inventaris          = ${
        formattedDateInventaris ? `'${formattedDateInventaris}'` : null
      },
      no_register_awal        = ${
        data.no_register_awal ? `${data.no_register_awal}` : null
      },
      no_register_akhir       = ${
        data.no_register_akhir ? `${data.no_register_akhir}` : null
      },
      no_register_status      = ${data.no_register_status},
      kategori_id_awal        = ${
        data.kategori_id_awal ? `${data.kategori_id_awal}` : null
      },
      kategori_id_akhir       = ${
        data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
      },
      kategori_id_status      = ${data.kategori_id_status},
      nama_spesifikasi_awal   = ${
        data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
      nama_spesifikasi_akhir  = ${
        data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null
      },
      nama_spesifikasi_status = ${data.nama_spesifikasi_status},
      jumlah_awal             = ${
        data.jumlah_awal ? `${data.jumlah_awal}` : null
      },
      jumlah_akhir            = ${
        data.jumlah_akhir ? `${data.jumlah_akhir}` : null
      },
      jumlah_status           = ${data.jumlah_status},
      a_luas_m2_awal          = ${
        data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null
      },
      a_luas_m2_akhir         = ${
        data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null
      },
      a_luas_m2_status        = ${data.a_luas_m2_status},
      satuan                  = ${data.satuan ? `'${data.satuan}'` : null},
      cara_perolehan_awal     = ${
        data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
      },
      cara_perolehan_akhir    = ${
        data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
      },
      cara_perolehan_status   = ${data.cara_perolehan_status},
      tgl_perolehan           = ${
        formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
      },
      tahun_perolehan         = ${
        data.tahun_perolehan ? `${data.tahun_perolehan}` : null
      },
      perolehan_awal          = ${
        data.perolehan_awal ? `'${data.perolehan_awal}'` : null
      },
      perolehan_akhir         = ${
        data.perolehan_akhir ? `${data.perolehan_akhir}` : null
      },
      perolehan_status        = ${data.perolehan_status}
    WHERE
        kib_id = ${kib_id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateInventarisB: (kib_id, data) => {
    // console.log({kib_id, data});

    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;

    let query = `
    UPDATE 
      aset.kib_inventaris
    SET
      tgl_inventaris          = ${
        formattedDateInventaris ? `'${formattedDateInventaris}'` : null
      },
      no_register_awal        = ${
        data.no_register_awal ? `${data.no_register_awal}` : null
      },
      no_register_akhir       = ${
        data.no_register_akhir ? `${data.no_register_akhir}` : null
      },
      no_register_status      = ${data.no_register_status},
      kategori_id_awal        = ${
        data.kategori_id_awal ? `${data.kategori_id_awal}` : null
      },
      kategori_id_akhir       = ${
        data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
      },
      kategori_id_status      = ${data.kategori_id_status},
      nama_spesifikasi_awal   = ${
        data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
      nama_spesifikasi_akhir  = ${
        data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null
      },
      nama_spesifikasi_status = ${data.nama_spesifikasi_status},
      jumlah_awal             = ${
        data.jumlah_awal ? `${data.jumlah_awal}` : null
      },
      satuan                  = ${data.satuan ? `'${data.satuan}'` : null},
      cara_perolehan_awal     = ${
        data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
      },
      cara_perolehan_akhir    = ${
        data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
      },
      cara_perolehan_status   = ${data.cara_perolehan_status},
      tgl_perolehan           = ${
        formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
      },
      tahun_perolehan         = ${
        data.tahun_perolehan ? `${data.tahun_perolehan}` : null
      },
      perolehan_awal          = ${
        data.perolehan_awal ? `'${data.perolehan_awal}'` : null
      },
      perolehan_akhir         = ${
        data.perolehan_akhir ? `${data.perolehan_akhir}` : null
      },
      perolehan_status        = ${data.perolehan_status}
    WHERE
        kib_id = ${kib_id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateInventarisC: (kib_id, data) => {
    // console.log({kib_id, data});

    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;

    let query = `
    UPDATE 
      aset.kib_inventaris
    SET
      tgl_inventaris          = ${
        formattedDateInventaris ? `'${formattedDateInventaris}'` : null
      },
      no_register_awal        = ${
        data.no_register_awal ? `${data.no_register_awal}` : null
      },
      no_register_akhir       = ${
        data.no_register_akhir ? `${data.no_register_akhir}` : null
      },
      no_register_status      = ${data.no_register_status},
      kategori_id_awal        = ${
        data.kategori_id_awal ? `${data.kategori_id_awal}` : null
      },
      kategori_id_akhir       = ${
        data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
      },
      kategori_id_status      = ${data.kategori_id_status},
      nama_spesifikasi_awal   = ${
        data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
      nama_spesifikasi_akhir  = ${
        data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null
      },
      nama_spesifikasi_status = ${data.nama_spesifikasi_status},
      jumlah_awal             = ${
        data.jumlah_awal ? `${data.jumlah_awal}` : null
      },
      jumlah_akhir            = ${
        data.jumlah_akhir ? `${data.jumlah_akhir}` : null
      },
      jumlah_status           = ${data.jumlah_status},
      satuan                  = ${data.satuan ? `'${data.satuan}'` : null},
      cara_perolehan_awal     = ${
        data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
      },
      cara_perolehan_akhir    = ${
        data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
      },
      cara_perolehan_status   = ${data.cara_perolehan_status},
      tgl_perolehan           = ${
        formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
      },
      tahun_perolehan         = ${
        data.tahun_perolehan ? `${data.tahun_perolehan}` : null
      },
      perolehan_awal          = ${
        data.perolehan_awal ? `'${data.perolehan_awal}'` : null
      },
      perolehan_akhir         = ${
        data.perolehan_akhir ? `${data.perolehan_akhir}` : null
      },
      perolehan_status        = ${data.perolehan_status}
    WHERE
        kib_id = ${kib_id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateInventarisD: (kib_id, data) => {
    // console.log({kib_id, data});

    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;

    let query = `
    UPDATE 
      aset.kib_inventaris
    SET
      tgl_inventaris          = ${
        formattedDateInventaris ? `'${formattedDateInventaris}'` : null
      },
      no_register_awal        = ${
        data.no_register_awal ? `${data.no_register_awal}` : null
      },
      no_register_akhir       = ${
        data.no_register_akhir ? `${data.no_register_akhir}` : null
      },
      no_register_status      = ${data.no_register_status},
      kategori_id_awal        = ${
        data.kategori_id_awal ? `${data.kategori_id_awal}` : null
      },
      kategori_id_akhir       = ${
        data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
      },
      kategori_id_status      = ${data.kategori_id_status},
      nama_spesifikasi_awal   = ${
        data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
      nama_spesifikasi_akhir  = ${
        data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null
      },
      nama_spesifikasi_status = ${data.nama_spesifikasi_status},
      jumlah_awal             = ${
        data.jumlah_awal ? `${data.jumlah_awal}` : null
      },
      jumlah_akhir            = ${
        data.jumlah_akhir ? `${data.jumlah_akhir}` : null
      },
      jumlah_status           = ${data.jumlah_status},
      satuan                  = ${data.satuan ? `'${data.satuan}'` : null},
      cara_perolehan_awal     = ${
        data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
      },
      cara_perolehan_akhir    = ${
        data.cara_perolehan_akhir ? `'${data.a_luas_m2_akhir}'` : null
      },
      cara_perolehan_status   = ${data.cara_perolehan_status},
      tgl_perolehan           = ${
        formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
      },
      tahun_perolehan         = ${
        data.tahun_perolehan ? `${data.tahun_perolehan}` : null
      },
      perolehan_awal          = ${
        data.perolehan_awal ? `'${data.perolehan_awal}'` : null
      },
      perolehan_akhir         = ${
        data.perolehan_akhir ? `${data.perolehan_akhir}` : null
      },
      perolehan_status        = ${data.perolehan_status}
    WHERE
        kib_id = ${kib_id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  insertInventarisA: (data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;

    let query = `
      INSERT INTO aset.kib_inventaris (
        tgl_inventaris,
        no_register_awal,
        no_register_akhir,
        no_register_status,
        kategori_id_awal,
        kategori_id_akhir,
        kategori_id_status,
        nama_spesifikasi_awal,
        nama_spesifikasi_akhir,
        nama_spesifikasi_status,
        jumlah_awal,
        jumlah_akhir,
        jumlah_status,
        a_luas_m2_awal,
        a_luas_m2_akhir,
        a_luas_m2_status,
        satuan,
        cara_perolehan_awal,
        cara_perolehan_akhir,
        cara_perolehan_status,
        tgl_perolehan,
        tahun_perolehan,
        perolehan_awal,
        perolehan_akhir,
        perolehan_status
      ) VALUES (
        ${formattedDateInventaris ? `'${formattedDateInventaris}'` : null},
        ${data.no_register_awal ? `${data.no_register_awal}` : null},
        ${data.no_register_akhir ? `${data.no_register_akhir}` : null},
        ${data.no_register_status},
        ${data.kategori_id_awal ? `${data.kategori_id_awal}` : null},
        ${data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null},
        ${data.kategori_id_status},
        ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        ${data.nama_spesifikasi_status},
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        ${data.jumlah_akhir ? `${data.jumlah_akhir}` : null},
        ${data.jumlah_status},
        ${data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null},
        ${data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null},
        ${data.a_luas_m2_status},
        ${data.satuan ? `'${data.satuan}'` : null},
        ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        ${data.cara_perolehan_status},
        ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        ${data.perolehan_awal ? `'${data.perolehan_awal}'` : null},
        ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        ${data.perolehan_status}
      )
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

export default inventarisModel;
