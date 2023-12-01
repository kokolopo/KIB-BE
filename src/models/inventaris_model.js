import DB from "../config/db.js";

const inventarisModel = {
  // UPDATE METHOD
  updateInventarisA: (kib_id, data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsSertifikatTglAwal = data.a_sertifikat_tanggal_awal
      ? data.a_sertifikat_tanggal_awal.split("-")
      : null;
    const partsSertifikatTglAkhir = data.a_sertifikat_tanggal_akhir
      ? data.a_sertifikat_tanggal_akhir.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;
    const formattedSertifikatTglAwal = partsSertifikatTglAwal
      ? `${partsSertifikatTglAwal[2]}-${partsSertifikatTglAwal[1]}-${partsSertifikatTglAwal[0]}`
      : null;
    const formattedSertifikatTglAkhir = partsSertifikatTglAkhir
      ? `${partsSertifikatTglAkhir[2]}-${partsSertifikatTglAkhir[1]}-${partsSertifikatTglAkhir[0]}`
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]}`
      : null;

    let query = `
      UPDATE 
        aset.kib_inventaris
      SET
        tgl_inventaris                    = ${formattedDateInventaris ? `'${formattedDateInventaris}'` : null},
        no_register_awal                  = ${data.no_register_awal ? `${data.no_register_awal}` : null},
        no_register_akhir                 = ${data.no_register_akhir ? `${data.no_register_akhir}` : null},
        no_register_status                = ${data.no_register_status ? `${data.no_register_status}` : null},
        kategori_id_awal                  = ${data.kategori_id_awal ? `${data.kategori_id_awal}` : null},
        kategori_id_akhir                 = ${data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null},
        kategori_id_status                = ${data.kategori_id_status ? `${data.kategori_id_status}` : null},
        nama_spesifikasi_awal             = ${data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null},
        nama_spesifikasi_akhir            = ${data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null},
        nama_spesifikasi_status           = ${data.nama_spesifikasi_status ? `${data.nama_spesifikasi_status}` : null},
        jumlah_awal                       = ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        jumlah_akhir                      = ${data.jumlah_akhir ? `${data.jumlah_akhir}` : null},
        jumlah_status                     = ${data.jumlah_status ? `${data.jumlah_status}` : null},
        a_luas_m2_awal                    = ${data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null},
        a_luas_m2_akhir                   = ${data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null},
        a_luas_m2_status                  = ${data.a_luas_m2_status ? `${data.a_luas_m2_status}` : null},
        satuan                            = ${data.satuan ? `'${data.satuan}'` : null},
        cara_perolehan_awal               = ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        cara_perolehan_akhir              = ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        cara_perolehan_status             = ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
        tgl_perolehan                     = ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        tahun_perolehan                   = ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        perolehan_awal                    = ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
        perolehan_akhir                   = ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        perolehan_status                  = ${data.perolehan_status ? `${data.perolehan_status}` : null},
        atribusi_status                   = ${data.atribusi_status ? `${data.atribusi_status}` : null},
        atribusi_nibar                    = ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
        atribusi_kode_barang              = ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
        atribusi_kode_lokasi              = ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
        atribusi_no_register              = ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
        atribusi_nama_barang              = ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
        atribusi_spesifikasi_barang       = ${data.atribusi_spesifikasi_barang ? `'${data.atribusi_spesifikasi_barang}'` : null},
        a_alamat_awal                     = ${data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null},
        a_alamat_status                   = ${data.a_alamat_status ? `${data.a_alamat_status}` : null},
        alamat_kota                       = ${data.alamat_kota ? `'${data.alamat_kota}'` : null},
        alamat_kecamatan                  = ${data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null},
        alamat_kelurahan                  = ${data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null},
        alamat_jalan                      = ${data.alamat_jalan ? `'${data.alamat_jalan}'` : null},
        alamat_no                         = ${data.alamat_no ? `'${data.alamat_no}'` : null},
        alamat_rt                         = ${data.alamat_rt ? `'${data.alamat_rt}'` : null},
        alamat_rw                         = ${data.alamat_rw ? `'${data.alamat_rw}'` : null},
        alamat_kodepos                    = ${data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null},
        a_hak_tanah_awal                  = ${data.a_hak_tanah_awal ? `'${data.a_hak_tanah_awal}'` : null},
        a_hak_tanah_akhir                 = ${data.a_hak_tanah_akhir ? `'${data.a_hak_tanah_akhir}'` : null},
        a_hak_tanah_status                = ${data.a_hak_tanah_status ? `${data.a_hak_tanah_status}` : null},
        a_sertifikat_nomor_awal           = ${data.a_sertifikat_nomor_awal ? `'${data.a_sertifikat_nomor_awal}'` : null},
        a_sertifikat_nomor_akhir          = ${data.a_sertifikat_nomor_akhir ? `'${data.a_sertifikat_nomor_akhir}'` : null},
        a_sertifikat_nomor_status         = ${data.a_sertifikat_nomor_status ? `${data.a_sertifikat_nomor_status}` : null},
        a_sertifikat_tanggal_awal         = ${formattedSertifikatTglAwal ? `'${formattedSertifikatTglAwal}'` : null},
        a_sertifikat_tanggal_akhir        = ${formattedSertifikatTglAkhir ? `'${formattedSertifikatTglAkhir}'` : null},
        a_sertifikat_tanggal_status       = ${data.a_sertifikat_tanggal_status ? `${data.a_sertifikat_tanggal_status}` : null},
        keberadaan_barang_status          = ${data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : null},
        kondisi_awal                      = ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
        kondisi_akhir                     = ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
        kondisi_status                    = ${data.kondisi_status ? `${data.kondisi_status}` : null},
        asal_usul_awal                    = ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
        asal_usul_akhir                   = ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
        asal_usul_status                  = ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
        penggunaan_status                 = ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
        penggunaan_awal                   = ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
        penggunaan_pemda_status           = ${data.penggunaan_pemda_status ? `${data.penggunaan_pemda_status}` : null},
        penggunaan_pemda_akhir            = ${data.penggunaan_pemda_akhir ? `'${data.penggunaan_pemda_akhir}'` : null},
        penggunaan_pempus_status          = ${data.penggunaan_pempus_status ? `${data.penggunaan_pempus_status}` : null},
        penggunaan_pempus_yt              = ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
        penggunaan_pempus_y_nm            = ${data.penggunaan_pempus_y_nm ? `'${data.penggunaan_pempus_y_nm}'` : null},
        penggunaan_pempus_y_doc           = ${data.penggunaan_pempus_y_doc ? `'${data.penggunaan_pempus_y_doc}'` : null},
        penggunaan_pempus_t_nm            = ${data.penggunaan_pempus_t_nm ? `'${data.penggunaan_pempus_t_nm}'` : null},
        penggunaan_pdl_status             = ${data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null},
        penggunaan_pdl_yt                 = ${data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null},
        penggunaan_pdl_y_nm               = ${data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null},
        penggunaan_pdl_y_doc              = ${data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null},
        penggunaan_pdl_t_nm               = ${data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null},
        penggunaan_pl_status              = ${data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null},
        penggunaan_pl_yt                  = ${data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null},
        penggunaan_pl_y_nm                = ${data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null},
        penggunaan_pl_y_doc               = ${data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null},
        penggunaan_pl_t_nm                = ${data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null},
        tercatat_ganda                    = ${data.tercatat_ganda ? `${data.tercatat_ganda}` : null},
        tercatat_ganda_nibar              = ${data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null},
        tercatat_ganda_no_register        = ${data.tercatat_ganda_no_register ? `'${data.tercatat_ganda_no_register}'` : null},
        tercatat_ganda_kode_barang        = ${data.tercatat_ganda_kode_barang ? `'${data.tercatat_ganda_kode_barang}'` : null},
        tercatat_ganda_nama_barang        = ${data.tercatat_ganda_nama_barang ? `'${data.tercatat_ganda_nama_barang}'` : null},
        tercatat_ganda_spesifikasi_barang = ${data.tercatat_ganda_spesifikasi_barang ? `'${data.tercatat_ganda_spesifikasi_barang}'` : null},
        tercatat_ganda_luas               = ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
        tercatat_ganda_satuan             = ${data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null},
        tercatat_ganda_perolehan          = ${data.tercatat_ganda_perolehan ? `'${data.tercatat_ganda_perolehan}'` : null},
        tercatat_ganda_tanggal_perolehan  = ${formattedTercatatGandaTglPerolehan ? `'${formattedTercatatGandaTglPerolehan}'` : null},
        tercatat_ganda_kuasa_pengguna     = ${data.tercatat_ganda_kuasa_pengguna ? `'${data.tercatat_ganda_kuasa_pengguna}'` : null},
        pemilik_id                        = ${data.pemilik_id ? `${data.pemilik_id}` : null},
        lat                               = ${data.lat ? `'${data.lat}'` : null},
        long                              = ${data.long ? `'${data.long}'` : null},
        lainnya                           = ${data.lainnya ? `'${data.lainnya}'` : null},
        keterangan                        = ${data.keterangan ? `'${data.keterangan}'` : null},
        tahun                             = ${data.tahun ? `${data.tahun}` : null}
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
      tgl_inventaris          = ${formattedDateInventaris ? `'${formattedDateInventaris}'` : null
      },
      no_register_awal        = ${data.no_register_awal ? `${data.no_register_awal}` : null
      },
      no_register_akhir       = ${data.no_register_akhir ? `${data.no_register_akhir}` : null
      },
      no_register_status      = ${data.no_register_status},
      kategori_id_awal        = ${data.kategori_id_awal ? `${data.kategori_id_awal}` : null
      },
      kategori_id_akhir       = ${data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
      },
      kategori_id_status      = ${data.kategori_id_status},
      nama_spesifikasi_awal   = ${data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
      nama_spesifikasi_akhir  = ${data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null
      },
      nama_spesifikasi_status = ${data.nama_spesifikasi_status},
      jumlah_awal             = ${data.jumlah_awal ? `${data.jumlah_awal}` : null
      },
      satuan                  = ${data.satuan ? `'${data.satuan}'` : null},
      cara_perolehan_awal     = ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
      },
      cara_perolehan_akhir    = ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
      },
      cara_perolehan_status   = ${data.cara_perolehan_status},
      tgl_perolehan           = ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
      },
      tahun_perolehan         = ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null
      },
      perolehan_awal          = ${data.perolehan_awal ? `'${data.perolehan_awal}'` : null
      },
      perolehan_akhir         = ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null
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


  // INSERT METHOD
  insertInventarisA: (data) => {
    console.log({ data });

    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsSertifikatTglAwal = data.a_sertifikat_tanggal_awal
      ? data.a_sertifikat_tanggal_awal.split("-")
      : null;
    const partsSertifikatTglAkhir = data.a_sertifikat_tanggal_akhir
      ? data.a_sertifikat_tanggal_akhir.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]}`
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]}`
      : null;
    const formattedSertifikatTglAwal = partsSertifikatTglAwal
      ? `${partsSertifikatTglAwal[2]}-${partsSertifikatTglAwal[1]}-${partsSertifikatTglAwal[0]}`
      : null;
    const formattedSertifikatTglAkhir = partsSertifikatTglAkhir
      ? `${partsSertifikatTglAkhir[2]}-${partsSertifikatTglAkhir[1]}-${partsSertifikatTglAkhir[0]}`
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]}`
      : null;

    let query = `
        INSERT INTO aset.kib_inventaris (
          kib_id,
          penetapan_id,
          departemen_id,
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
          perolehan_status,
          atribusi_status,
          atribusi_nibar,
          atribusi_kode_barang,
          atribusi_kode_lokasi,
          atribusi_no_register,
          atribusi_nama_barang,
          atribusi_spesifikasi_barang,
          a_alamat_awal,
          a_alamat_status,
          alamat_kota,
          alamat_kecamatan,
          alamat_kelurahan,
          alamat_jalan,
          alamat_no,
          alamat_rt,
          alamat_rw,
          alamat_kodepos,
          a_hak_tanah_awal,
          a_hak_tanah_akhir,
          a_hak_tanah_status,
          a_sertifikat_nomor_awal,
          a_sertifikat_nomor_akhir,
          a_sertifikat_nomor_status,
          a_sertifikat_tanggal_awal,
          a_sertifikat_tanggal_akhir,
          a_sertifikat_tanggal_status,
          keberadaan_barang_status,
          kondisi_awal,
          kondisi_akhir,
          kondisi_status,
          asal_usul_awal,
          asal_usul_akhir,
          asal_usul_status,
          penggunaan_status,
          penggunaan_awal,
          penggunaan_pemda_status,
          penggunaan_pemda_akhir,
          penggunaan_pempus_status,
          penggunaan_pempus_yt,
          penggunaan_pempus_y_nm,
          penggunaan_pempus_y_doc,
          penggunaan_pempus_t_nm,
          penggunaan_pdl_status,
          penggunaan_pdl_yt,
          penggunaan_pdl_y_nm,
          penggunaan_pdl_y_doc,
          penggunaan_pdl_t_nm,
          penggunaan_pl_status,
          penggunaan_pl_yt,
          penggunaan_pl_y_nm,
          penggunaan_pl_y_doc,
          penggunaan_pl_t_nm,
          tercatat_ganda,
          tercatat_ganda_nibar,
          tercatat_ganda_no_register,
          tercatat_ganda_kode_barang,
          tercatat_ganda_nama_barang,
          tercatat_ganda_spesifikasi_barang,
          tercatat_ganda_luas,
          tercatat_ganda_satuan,
          tercatat_ganda_perolehan,
          tercatat_ganda_tanggal_perolehan,
          tercatat_ganda_kuasa_pengguna,
          pemilik_id,
          lat,
          long,
          lainnya,
          keterangan,
          tahun
        ) VALUES (
          ${data.kib_id ? `${data.kib_id}` : null},
          ${data.penetapan_id ? `${data.penetapan_id}` : null},
          ${data.departemen_id ? `${data.departemen_id}` : null},
          ${formattedDateInventaris ? `'${formattedDateInventaris}'` : null},
          ${data.no_register_awal ? `${data.no_register_awal}` : null},
          ${data.no_register_akhir ? `${data.no_register_akhir}` : null},
          ${data.no_register_status ? `${data.no_register_status}` : null},
          ${data.kategori_id_awal ? `${data.kategori_id_awal}` : null},
          ${data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null},
          ${data.kategori_id_status ? `${data.kategori_id_status}` : null},
          ${data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null},
          ${data.nama_spesifikasi_akhir ? `'${data.nama_spesifikasi_akhir}'` : null},
          ${data.nama_spesifikasi_status ? `${data.nama_spesifikasi_status}` : null},
          ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
          ${data.jumlah_akhir ? `${data.jumlah_akhir}` : null},
          ${data.jumlah_status ? `${data.jumlah_status}` : null},
          ${data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null},
          ${data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null},
          ${data.a_luas_m2_status ? `${data.a_luas_m2_status}` : null},
          ${data.satuan ? `'${data.satuan}'` : null},
          ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
          ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
          ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
          ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
          ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
          ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
          ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
          ${data.perolehan_status ? `${data.perolehan_status}` : null},
          ${data.atribusi_status ? `${data.atribusi_status}` : null},
          ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
          ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
          ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
          ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
          ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
          ${data.atribusi_spesifikasi_barang ? `'${data.atribusi_spesifikasi_barang}'` : null},
          ${data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null},
          ${data.a_alamat_status ? `${data.a_alamat_status}` : null},
          ${data.alamat_kota ? `'${data.alamat_kota}'` : null},
          ${data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null},
          ${data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null},
          ${data.alamat_jalan ? `'${data.alamat_jalan}'` : null},
          ${data.alamat_no ? `'${data.alamat_no}'` : null},
          ${data.alamat_rt ? `'${data.alamat_rt}'` : null},
          ${data.alamat_rw ? `'${data.alamat_rw}'` : null},
          ${data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null},
          ${data.a_hak_tanah_awal ? `'${data.a_hak_tanah_awal}'` : null},
          ${data.a_hak_tanah_akhir ? `'${data.a_hak_tanah_akhir}'` : null},
          ${data.a_hak_tanah_status ? `${data.a_hak_tanah_status}` : null},
          ${data.a_sertifikat_nomor_awal ? `'${data.a_sertifikat_nomor_awal}'` : null},
          ${data.a_sertifikat_nomor_akhir ? `'${data.a_sertifikat_nomor_akhir}'` : null},
          ${data.a_sertifikat_nomor_status ? `${data.a_sertifikat_nomor_status}` : null},
          ${formattedSertifikatTglAwal ? `'${formattedSertifikatTglAwal}'` : null},
          ${formattedSertifikatTglAkhir ? `'${formattedSertifikatTglAkhir}'` : null},
          ${data.a_sertifikat_tanggal_status ? `${data.a_sertifikat_tanggal_status}` : null},
          ${data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : null},
          ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
          ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
          ${data.kondisi_status ? `${data.kondisi_status}` : null},
          ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
          ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
          ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
          ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
          ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
          ${data.penggunaan_pemda_status ? `${data.penggunaan_pemda_status}` : null},
          ${data.penggunaan_pemda_akhir ? `'${data.penggunaan_pemda_akhir}'` : null},
          ${data.penggunaan_pempus_status ? `${data.penggunaan_pempus_status}` : null},
          ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
          ${data.penggunaan_pempus_y_nm ? `'${data.penggunaan_pempus_y_nm}'` : null},
          ${data.penggunaan_pempus_y_doc ? `'${data.penggunaan_pempus_y_doc}'` : null},
          ${data.penggunaan_pempus_t_nm ? `'${data.penggunaan_pempus_t_nm}'` : null},
          ${data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null},
          ${data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null},
          ${data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null},
          ${data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null},
          ${data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null},
          ${data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null},
          ${data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null},
          ${data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null},
          ${data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null},
          ${data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null},
          ${data.tercatat_ganda ? `${data.tercatat_ganda}` : null},
          ${data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null},
          ${data.tercatat_ganda_no_register ? `'${data.tercatat_ganda_no_register}'` : null},
          ${data.tercatat_ganda_kode_barang ? `'${data.tercatat_ganda_kode_barang}'` : null},
          ${data.tercatat_ganda_nama_barang ? `'${data.tercatat_ganda_nama_barang}'` : null},
          ${data.tercatat_ganda_spesifikasi_barang ? `'${data.tercatat_ganda_spesifikasi_barang}'` : null},
          ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
          ${data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null},
          ${data.tercatat_ganda_perolehan ? `'${data.tercatat_ganda_perolehan}'` : null},
          ${formattedTercatatGandaTglPerolehan ? `'${formattedTercatatGandaTglPerolehan}'` : null},
          ${data.tercatat_ganda_kuasa_pengguna ? `'${data.tercatat_ganda_kuasa_pengguna}'` : null},
          ${data.pemilik_id ? `${data.pemilik_id}` : null},
          ${data.lat ? `'${data.lat}'` : null},
          ${data.long ? `'${data.long}'` : null},
          ${data.lainnya ? `'${data.lainnya}'` : null},
          ${data.keterangan ? `'${data.keterangan}'` : null},
          ${data.tahun ? `${data.tahun}` : null}
        )  
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  insertInventarisB: (data) => {
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
        ${data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
      },
        ${data.nama_spesifikasi_akhir
        ? `'${data.nama_spesifikasi_akhir}'`
        : null
      },
        ${data.nama_spesifikasi_status},
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
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
