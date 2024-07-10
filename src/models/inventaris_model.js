import DB from "../config/db.js";

const inventarisModel = {
  // INSERT MODEL
  insertInventarisA: (data) => {
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
          atribusi_biaya,
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
          a_hak_tanah_akhir ,
          a_hak_tanah_status,
          a_sertifikat_nomor_awal ,
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
          tercatat_ganda_kuasa_pengguna ,
          pemilik_id,
          lat,
          long,
          lainnya,
          keterangan,
          petugas,
          tahun,
          status
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
          ${
            data.nama_spesifikasi_awal
              ? `'${data.nama_spesifikasi_awal}'`
              : null
          },
          ${
            data.nama_spesifikasi_akhir
              ? `'${data.nama_spesifikasi_akhir}'`
              : null
          },
          ${
            data.nama_spesifikasi_status
              ? `${data.nama_spesifikasi_status}`
              : null
          },
          ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
          ${data.jumlah_akhir ? `${data.jumlah_akhir}` : null},
          ${data.jumlah_status ? `${data.jumlah_status}` : null},
          ${data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null},
          ${data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null},
          ${data.a_luas_m2_status ? `${data.a_luas_m2_status}` : null},
          ${data.satuan ? `'${data.satuan}'` : null},
          ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
          ${
            data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
          },
          ${
            data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
          },
          ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
          ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
          ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
          ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
          ${data.perolehan_status ? `${data.perolehan_status}` : null},
          ${data.atribusi_biaya ? `${data.atribusi_biaya}` : null},
          ${data.atribusi_status ? `${data.atribusi_status}` : null},
          ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
          ${
            data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
          },
          ${
            data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
          },
          ${
            data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
          },
          ${
            data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
          },
          ${
            data.atribusi_spesifikasi_barang
              ? `'${data.atribusi_spesifikasi_barang}'`
              : null
          },
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
          ${
            data.a_sertifikat_nomor_awal
              ? `'${data.a_sertifikat_nomor_awal}'`
              : null
          },
          ${
            data.a_sertifikat_nomor_akhir
              ? `'${data.a_sertifikat_nomor_akhir}'`
              : null
          },
          ${
            data.a_sertifikat_nomor_status
              ? `${data.a_sertifikat_nomor_status}`
              : null
          },
          ${
            formattedSertifikatTglAwal
              ? `'${formattedSertifikatTglAwal}'`
              : null
          },
          ${
            formattedSertifikatTglAkhir
              ? `'${formattedSertifikatTglAkhir}'`
              : null
          },
          ${
            data.a_sertifikat_tanggal_status
              ? `${data.a_sertifikat_tanggal_status}`
              : null
          },
          ${
            data.keberadaan_barang_status
              ? `${data.keberadaan_barang_status}`
              : null
          },
          ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
          ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
          ${data.kondisi_status ? `${data.kondisi_status}` : null},
          ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
          ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
          ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
          ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
          ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
          ${
            data.penggunaan_pemda_status
              ? `${data.penggunaan_pemda_status}`
              : null
          },
          ${
            data.penggunaan_pemda_akhir
              ? `'${data.penggunaan_pemda_akhir}'`
              : null
          },
          ${
            data.penggunaan_pempus_status
              ? `${data.penggunaan_pempus_status}`
              : null
          },
          ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
          ${
            data.penggunaan_pempus_y_nm
              ? `'${data.penggunaan_pempus_y_nm}'`
              : null
          },
          ${
            data.penggunaan_pempus_y_doc
              ? `'${data.penggunaan_pempus_y_doc}'`
              : null
          },
          ${
            data.penggunaan_pempus_t_nm
              ? `'${data.penggunaan_pempus_t_nm}'`
              : null
          },
          ${
            data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
          },
          ${data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null},
          ${data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null},
          ${
            data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
          },
          ${data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null},
          ${data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null},
          ${data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null},
          ${data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null},
          ${data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null},
          ${data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null},
          ${data.tercatat_ganda ? `${data.tercatat_ganda}` : null},
          ${
            data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
          },
          ${
            data.tercatat_ganda_no_register
              ? `'${data.tercatat_ganda_no_register}'`
              : null
          },
          ${
            data.tercatat_ganda_kode_barang
              ? `'${data.tercatat_ganda_kode_barang}'`
              : null
          },
          ${
            data.tercatat_ganda_nama_barang
              ? `'${data.tercatat_ganda_nama_barang}'`
              : null
          },
          ${
            data.tercatat_ganda_spesifikasi_barang
              ? `'${data.tercatat_ganda_spesifikasi_barang}'`
              : null
          },
          ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
          ${
            data.tercatat_ganda_satuan
              ? `'${data.tercatat_ganda_satuan}'`
              : null
          },
          ${
            data.tercatat_ganda_perolehan
              ? `'${data.tercatat_ganda_perolehan}'`
              : null
          },
          ${
            formattedTercatatGandaTglPerolehan
              ? `'${formattedTercatatGandaTglPerolehan}'`
              : null
          },
          ${
            data.tercatat_ganda_kuasa_pengguna
              ? `'${data.tercatat_ganda_kuasa_pengguna}'`
              : null
          },
          ${data.pemilik_id ? `${data.pemilik_id}` : null},
          ${data.lat ? `'${data.lat}'` : null},
          ${data.long ? `'${data.long}'` : null},
          ${data.lainnya ? `'${data.lainnya}'` : null},
          ${data.keterangan ? `'${data.keterangan}'` : null},
          ${data.petugas ? `'${data.petugas}'` : "[]"},
          ${data.tahun},
          ${data.status}
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
        satuan,    
        cara_perolehan_awal,                 
        cara_perolehan_akhir,                 
        cara_perolehan_status,                
        tgl_perolehan,                   
        tahun_perolehan,           
        perolehan_awal,          
        perolehan_akhir,           
        perolehan_status,            
        atribusi_biaya,        
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
        b_merk_awal,                           
        b_merk_akhir,                          
        b_merk_status,                         
        b_cc_awal,                             
        b_cc_akhir,                            
        b_cc_status,                           
        b_nomor_polisi_awal,                   
        b_nomor_polisi_akhir,                 
        b_nomor_polisi_status,                
        b_nomor_rangka_awal,                   
        b_nomor_rangka_akhir,                 
        b_nomor_rangka_status,                
        b_nomor_mesin_awal,                    
        b_nomor_mesin_akhir,                   
        b_nomor_mesin_status,                  
        b_nomor_bpkb_awal,                     
        b_nomor_bpkb_akhir,                    
        b_nomor_bpkb_status,                   
        b_bahan_awal,                          
        b_bahan_akhir,                         
        b_bahan_status,                        
        b_nomor_pabrik_awal,                   
        b_nomor_pabrik_akhir,                 
        b_nomor_pabrik_status,                
        kartu_inv_awal,                        
        kartu_inv_akhir,                       
        kartu_inv_status,                      
        barcode_barang,                        
        barcode_ruangan,                       
        keberadaan_barang_akhir,             
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
        penggunaan_pemda_nama_pemakai,       
        penggunaan_pemda_nama_pemakai_akhir, 
        penggunaan_pemda_nama_pemakai_status, 
        penggunaan_pemda_status_pemakai,    
        penggunaan_pemda_bast_pemakaian,     
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
        lainnya,     
        keterangan,
        petugas,        
        tahun,
        status                
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
        ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        ${data.satuan ? `'${data.satuan}'` : null},
        ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
        ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
        ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        ${data.perolehan_status ? `${data.perolehan_status}` : null},
        ${data.atribusi_biaya ? `${data.atribusi_biaya}` : 0},
        ${data.atribusi_status ? `${data.atribusi_status}` : 0},
        ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
        ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
        ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
        ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
        ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
        ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
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
        ${data.b_merk_awal ? `'${data.b_merk_awal}'` : null},
        ${data.b_merk_akhir ? `'${data.b_merk_akhir}'` : null},
        ${data.b_merk_status ? `${data.b_merk_status}` : null},
        ${data.b_cc_awal ? `'${data.b_cc_awal}'` : null},
        ${data.b_cc_akhir ? `'${data.b_cc_akhir}'` : null},
        ${data.b_cc_status ? `${data.b_cc_status}` : null},
        ${data.b_nomor_polisi_awal ? `'${data.b_nomor_polisi_awal}'` : null},
        ${data.b_nomor_polisi_akhir ? `'${data.b_nomor_polisi_akhir}'` : null},
        ${data.b_nomor_polisi_status ? `${data.b_nomor_polisi_status}` : null},
        ${data.b_nomor_rangka_awal ? `'${data.b_nomor_rangka_awal}'` : null},
        ${data.b_nomor_rangka_akhir ? `'${data.b_nomor_rangka_akhir}'` : null}, 
        ${data.b_nomor_rangka_status ? `${data.b_nomor_rangka_status}` : null},
        ${data.b_nomor_mesin_awal ? `'${data.b_nomor_mesin_awal}'` : null},  
        ${data.b_nomor_mesin_akhir ? `'${data.b_nomor_mesin_akhir}'` : null},
        ${data.b_nomor_mesin_status ? `${data.b_nomor_mesin_status}` : null},  
        ${data.b_nomor_bpkb_awal ? `'${data.b_nomor_bpkb_awal}'` : null},    
        ${data.b_nomor_bpkb_akhir ? `'${data.b_nomor_bpkb_akhir}'` : null},  
        ${data.b_nomor_bpkb_status ? `${data.b_nomor_bpkb_status}` : null},    
        ${data.b_bahan_awal ? `'${data.b_bahan_awal}'` : null},              
        ${data.b_bahan_akhir ? `'${data.b_bahan_akhir}'` : null},            
        ${data.b_bahan_status ? `${data.b_bahan_status}` : null},              
        ${data.b_nomor_pabrik_awal ? `'${data.b_nomor_pabrik_awal}'` : null},
        ${data.b_nomor_pabrik_akhir ? `'${data.b_nomor_pabrik_akhir}'` : null}, 
        ${data.b_nomor_pabrik_status ? `${data.b_nomor_pabrik_status}` : null},
        ${data.kartu_inv_awal ? `'${data.kartu_inv_awal}'` : null},          
        ${data.kartu_inv_akhir ? `'${data.kartu_inv_akhir}'` : null},        
        ${data.kartu_inv_status ? `${data.kartu_inv_status}` : null},          
        ${data.barcode_barang ? `${data.barcode_barang}` : null},              
        ${data.barcode_ruangan ? `${data.barcode_ruangan}` : null},            
        ${
          data.keberadaan_barang_akhir
            ? `${data.keberadaan_barang_akhir}`
            : null
        },
        ${
          data.keberadaan_barang_status
            ? `${data.keberadaan_barang_status}`
            : null
        },
        ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
        ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
        ${data.kondisi_status ? `${data.kondisi_status}` : null},
        ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
        ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
        ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
        ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
        ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
        ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai
            ? `'${data.penggunaan_pemda_nama_pemakai}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai_akhir
            ? `'${data.penggunaan_pemda_nama_pemakai_akhir}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai_status
            ? `${data.penggunaan_pemda_nama_pemakai_status}`
            : null
        },
        ${
          data.penggunaan_pemda_status_pemakai
            ? `'${data.penggunaan_pemda_status_pemakai}'`
            : null
        },
        ${
          data.penggunaan_pemda_bast_pemakaian
            ? `${data.penggunaan_pemda_bast_pemakaian}`
            : null
        },
        ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
        ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
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
        ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
        ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        ${data.pemilik_id ? `${data.pemilik_id}` : null},
        ${data.lainnya ? `'${data.lainnya}'` : null},
        ${data.keterangan ? `'${data.keterangan}'` : null},
        ${data.petugas ? `'${data.petugas}'` : "[]"},
        ${data.tahun},
        ${data.status}
      )
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  insertInventarisC: (data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
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
        satuan,
        cara_perolehan_awal,
        cara_perolehan_akhir,
        cara_perolehan_status,
        tgl_perolehan,
        tahun_perolehan,
        perolehan_awal,
        perolehan_akhir,
        perolehan_status,
        atribusi_biaya,
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
        c_luas_bangunan_awal,
        c_luas_bangunan_akhir,
        c_luas_bangunan_status,
        c_satuan_bangunan,
        c_bertingkat,
        c_beton,
        c_luas_tanah_awal,
        c_luas_tanah_akhir,
        c_luas_tanah_status,
        c_satuan_tanah,
        c_status_tanah_awal,
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
        penggunaan_pemda_nama_pemakai,
        penggunaan_pemda_nama_pemakai_akhir,
        penggunaan_pemda_nama_pemakai_status,
        penggunaan_pemda_status_pemakai,
        penggunaan_pemda_bast_pemakaian,
        penggunaan_pemda_sip,
        penggunaan_pemda_imb,
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
        petugas,
        tahun,
        status
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
        ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        ${data.satuan ? `'${data.satuan}'` : null},
        ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
        ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
        ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        ${data.perolehan_status ? `${data.perolehan_status}` : null},
        ${data.atribusi_biaya ? `${data.atribusi_biaya}` : 0},
        ${data.atribusi_status ? `${data.atribusi_status}` : 0},
        ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
        ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
        ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
        ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
        ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
        ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
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
        ${data.c_luas_bangunan_awal ? `${data.c_luas_bangunan_awal}` : null},
        ${data.c_luas_bangunan_akhir ? `${data.c_luas_bangunan_akhir}` : null},
        ${
          data.c_luas_bangunan_status ? `${data.c_luas_bangunan_status}` : null
        },
        ${data.c_satuan_bangunan ? `'${data.c_satuan_bangunan}'` : null},
        ${data.c_bertingkat ? `${data.c_bertingkat}` : 0},
        ${data.c_beton ? `${data.c_beton}` : 0},
        ${data.c_luas_tanah_awal ? `${data.c_luas_tanah_awal}` : null},
        ${data.c_luas_tanah_akhir ? `${data.c_luas_tanah_akhir}` : null},
        ${data.c_luas_tanah_status ? `${data.c_luas_tanah_status}` : null},
        ${data.c_satuan_tanah ? `'${data.c_satuan_tanah}'` : null},
        ${data.c_status_tanah_awal ? `'${data.c_status_tanah_awal}'` : null},
        ${
          data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : 0
        },
        ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
        ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
        ${data.kondisi_status ? `${data.kondisi_status}` : null},
        ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
        ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
        ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
        ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
        ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
        ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai
            ? `'${data.penggunaan_pemda_nama_pemakai}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai_akhir
            ? `'${data.penggunaan_pemda_nama_pemakai_akhir}'`
            : null
        },
        ${
          data.penggunaan_pemda_nama_pemakai_status
            ? `${data.penggunaan_pemda_nama_pemakai_status}`
            : null
        },
        ${
          data.penggunaan_pemda_status_pemakai
            ? `'${data.penggunaan_pemda_status_pemakai}'`
            : null
        },
        ${
          data.penggunaan_pemda_bast_pemakaian
            ? `${data.penggunaan_pemda_bast_pemakaian}`
            : null
        },
        ${data.penggunaan_pemda_sip ? `${data.penggunaan_pemda_sip}` : null},
        ${data.penggunaan_pemda_imb ? `'${data.penggunaan_pemda_imb}'` : null},
        ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
        ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
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
        ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
        ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        ${data.pemilik_id ? `${data.pemilik_id}` : null},
        ${data.lat ? `'${data.lat}'` : null},
        ${data.long ? `'${data.long}'` : null},
        ${data.lainnya ? `'${data.lainnya}'` : null},
        ${data.keterangan ? `'${data.keterangan}'` : null},
        ${data.petugas ? `'${data.petugas}'` : "[]"},
        ${data.tahun},
        ${data.status}
      )
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  insertInventarisD: (data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
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
        satuan,                           
        cara_perolehan_awal,              
        cara_perolehan_akhir,             
        cara_perolehan_status,            
        tgl_perolehan,                    
        tahun_perolehan,                  
        perolehan_awal,                   
        perolehan_akhir,                  
        perolehan_status,                 
        atribusi_biaya,                  
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
        d_jenis_pengkerasan_jln_awal,     
        d_jenis_pengkerasan_jln_akhir,    
        d_jenis_pengkerasan_jln_status,   
        d_jenis_bahan_jembatan_awal,      
        d_jenis_bahan_jembatan_akhir,     
        d_jenis_bahan_jembatan_status,    
        d_nomor_ruas_jln_awal,            
        d_nomor_ruas_jln_akhir,           
        d_nomor_ruas_jln_status,          
        d_nomor_jaringan_irigasi_awal,    
        d_nomor_jaringan_irigasi_akhir,   
        d_nomor_jaringan_irigasi_status,  
        d_konstruksi_awal,                
        d_konstruksi_akhir,               
        d_konstruksi_status,              
        d_panjang_awal,                   
        d_panjang_akhir,                  
        d_panjang_status,                 
        d_panjang_satuan,                 
        d_lebar_awal,                     
        d_lebar_akhir,                    
        d_lebar_status,                   
        d_lebar_satuan,                   
        d_luas_awal,                      
        d_luas_akhir,                     
        d_luas_status,                    
        d_luas_satuan,                    
        d_luas_tanah,                     
        d_status_tanah,                   
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
        petugas,
        tahun,
        status
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
        ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        ${data.satuan ? `'${data.satuan}'` : null},
        ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
        ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
        ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        ${data.perolehan_status ? `${data.perolehan_status}` : null},
        ${data.atribusi_biaya ? `${data.atribusi_biaya}` : 0},
        ${data.atribusi_status ? `${data.atribusi_status}` : 0},
        ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
        ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
        ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
        ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
        ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
        ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
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
        ${
          data.keberadaan_barang_status
            ? `${data.keberadaan_barang_status}`
            : null
        },
        ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
        ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
        ${data.kondisi_status ? `${data.kondisi_status}` : null},
        ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
        ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
        ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
        ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
        ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
        ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
        ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
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
        ${
          data.d_jenis_pengkerasan_jln_awal
            ? `'${data.d_jenis_pengkerasan_jln_awal}'`
            : null
        },
        ${
          data.d_jenis_pengkerasan_jln_akhir
            ? `'${data.d_jenis_pengkerasan_jln_akhir}'`
            : null
        },
        ${
          data.d_jenis_pengkerasan_jln_status
            ? `${data.d_jenis_pengkerasan_jln_status}`
            : null
        },
        ${
          data.d_jenis_bahan_jembatan_awal
            ? `'${data.d_jenis_bahan_jembatan_awal}'`
            : null
        },
        ${
          data.d_jenis_bahan_jembatan_akhir
            ? `'${data.d_jenis_bahan_jembatan_akhir}'`
            : null
        },
        ${
          data.d_jenis_bahan_jembatan_status
            ? `${data.d_jenis_bahan_jembatan_status}`
            : null
        },
        ${
          data.d_nomor_ruas_jln_awal ? `'${data.d_nomor_ruas_jln_awal}'` : null
        },
        ${
          data.d_nomor_ruas_jln_akhir
            ? `'${data.d_nomor_ruas_jln_akhir}'`
            : null
        },
        ${
          data.d_nomor_ruas_jln_status
            ? `${data.d_nomor_ruas_jln_status}`
            : null
        },
        ${
          data.d_nomor_jaringan_irigasi_awal
            ? `'${data.d_nomor_jaringan_irigasi_awal}'`
            : null
        },
        ${
          data.d_nomor_jaringan_irigasi_akhir
            ? `'${data.d_nomor_jaringan_irigasi_akhir}'`
            : null
        },
        ${
          data.d_nomor_jaringan_irigasi_status
            ? `${data.d_nomor_jaringan_irigasi_status}`
            : null
        },
        ${data.d_konstruksi_awal ? `'${data.d_konstruksi_awal}'` : null},
        ${data.d_konstruksi_akhir ? `'${data.d_konstruksi_akhir}'` : null},
        ${data.d_konstruksi_status ? `${data.d_konstruksi_status}` : null},
        ${data.d_panjang_awal ? `${data.d_panjang_awal}` : null},
        ${data.d_panjang_akhir ? `${data.d_panjang_akhir}` : null},
        ${data.d_panjang_status ? `${data.d_panjang_status}` : null},
        ${data.d_panjang_satuan ? `'${data.d_panjang_satuan}'` : null},
        ${data.d_lebar_awal ? `${data.d_lebar_awal}` : null},
        ${data.d_lebar_akhir ? `${data.d_lebar_akhir}` : null},
        ${data.d_lebar_status ? `${data.d_lebar_status}` : null},
        ${data.d_lebar_satuan ? `'${data.d_lebar_satuan}'` : null},
        ${data.d_luas_awal ? `${data.d_luas_awal}` : null},
        ${data.d_luas_akhir ? `${data.d_luas_akhir}` : null},
        ${data.d_luas_status ? `${data.d_luas_status}` : null},
        ${data.d_luas_satuan ? `'${data.d_luas_satuan}'` : null},
        ${data.d_luas_tanah ? `'${data.d_luas_tanah}'` : null},
        ${data.d_status_tanah ? `'${data.d_status_tanah}'` : null},
        ${data.tercatat_ganda ? `${data.tercatat_ganda}` : null},
        ${data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null},
        ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
        ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        ${data.pemilik_id ? `${data.pemilik_id}` : null},
        ${data.lat ? `'${data.lat}'` : null},
        ${data.long ? `'${data.long}'` : null},
        ${data.lainnya ? `'${data.lainnya}'` : null},
        ${data.keterangan ? `'${data.keterangan}'` : null},
        ${data.petugas ? `'${data.petugas}'` : "[]"},
        ${data.tahun},
        ${data.status}
      )
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  insertInventarisE: (data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
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
        satuan,
        cara_perolehan_awal,
        cara_perolehan_akhir,
        cara_perolehan_status,
        tgl_perolehan,
        tahun_perolehan,
        perolehan_awal,
        perolehan_akhir,
        perolehan_status,
        atribusi_biaya,
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
        e_spek_awal,
        e_spek_akhir,
        e_spek_status,
        e_judul_awal,
        e_judul_akhir,
        e_judul_status,
        e_jenis_awal,
        e_jenis_akhir,
        e_jenis_status,
        e_bahan_awal,
        e_bahan_akhir,
        e_bahan_status,
        e_pencipta_awal,
        e_pencipta_akhir,
        e_pencipta_status,
        e_ukuran_awal,
        e_ukuran_akhir,
        e_ukuran_status,
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
        lainnya,
        keterangan,
        petugas,
        tahun,
        status
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
        ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        ${data.jumlah_awal ? `${data.jumlah_awal}` : null},
        ${data.satuan ? `'${data.satuan}'` : null},
        ${data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null},
        ${data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null},
        ${data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null},
        ${formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null},
        ${data.tahun_perolehan ? `${data.tahun_perolehan}` : null},
        ${data.perolehan_awal ? `${data.perolehan_awal}` : null},
        ${data.perolehan_akhir ? `${data.perolehan_akhir}` : null},
        ${data.perolehan_status ? `${data.perolehan_status}` : null},
        ${data.atribusi_biaya ? `${data.atribusi_biaya}` : 0},
        ${data.atribusi_status ? `${data.atribusi_status}` : 0},
        ${data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null},
        ${data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null},
        ${data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null},
        ${data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null},
        ${data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null},
        ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
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
        ${data.e_spek_awal ? `'${data.e_spek_awal}'` : null},
        ${data.e_spek_akhir ? `'${data.e_spek_akhir}'` : null},
        ${data.e_spek_status ? `${data.e_spek_status}` : null},
        ${data.e_judul_awal ? `'${data.e_judul_awal}'` : null},
        ${data.e_judul_akhir ? `'${data.e_judul_akhir}'` : null},
        ${data.e_judul_status ? `${data.e_judul_status}` : null},
        ${data.e_jenis_awal ? `'${data.e_jenis_awal}'` : null},
        ${data.e_jenis_akhir ? `'${data.e_jenis_akhir}'` : null},
        ${data.e_jenis_status ? `${data.e_jenis_status}` : null},
        ${data.e_bahan_awal ? `'${data.e_bahan_awal}'` : null},
        ${data.e_bahan_akhir ? `'${data.e_bahan_akhir}'` : null},
        ${data.e_bahan_status ? `${data.e_bahan_status}` : null},
        ${data.e_pencipta_awal ? `'${data.e_pencipta_awal}'` : null},
        ${data.e_pencipta_akhir ? `'${data.e_pencipta_akhir}'` : null},
        ${data.e_pencipta_status ? `${data.e_pencipta_status}` : null},
        ${data.e_ukuran_awal ? `'${data.e_ukuran_awal}'` : null},
        ${data.e_ukuran_akhir ? `'${data.e_ukuran_akhir}'` : null},
        ${data.e_ukuran_status ? `${data.e_ukuran_status}` : null},
        ${
          data.keberadaan_barang_status
            ? `${data.keberadaan_barang_status}`
            : null
        },
        ${data.kondisi_awal ? `'${data.kondisi_awal}'` : null},
        ${data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null},
        ${data.kondisi_status ? `${data.kondisi_status}` : null},
        ${data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null},
        ${data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null},
        ${data.asal_usul_status ? `${data.asal_usul_status}` : null},
        ${data.penggunaan_status ? `${data.penggunaan_status}` : null},
        ${data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null},
        ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        ${data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null},
        ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
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
        ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        ${data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null},
        ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        ${data.pemilik_id ? `${data.pemilik_id}` : null},
        ${data.lainnya ? `'${data.lainnya}'` : null},
        ${data.keterangan ? `'${data.keterangan}'` : null},
        ${data.petugas ? `'${data.petugas}'` : "[]"},
        ${data.tahun},
        ${data.status}
      )
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  // UPDATE MODEL
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
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]} `
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]} `
      : null;
    const formattedSertifikatTglAwal = partsSertifikatTglAwal
      ? `${partsSertifikatTglAwal[2]}-${partsSertifikatTglAwal[1]}-${partsSertifikatTglAwal[0]} `
      : null;
    const formattedSertifikatTglAkhir = partsSertifikatTglAkhir
      ? `${partsSertifikatTglAkhir[2]}-${partsSertifikatTglAkhir[1]}-${partsSertifikatTglAkhir[0]} `
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]} `
      : null;

    let query = `
      UPDATE
        aset.kib_inventaris
      SET
        tgl_inventaris                    = ${
          formattedDateInventaris ? `'${formattedDateInventaris}'` : null
        },
        no_register_awal                  = ${
          data.no_register_awal ? `${data.no_register_awal}` : null
        },
        no_register_akhir                 = ${
          data.no_register_akhir ? `${data.no_register_akhir}` : null
        },
        no_register_status                = ${
          data.no_register_status ? `${data.no_register_status}` : null
        },
        kategori_id_awal                  = ${
          data.kategori_id_awal ? `${data.kategori_id_awal}` : null
        },
        kategori_id_akhir                 = ${
          data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
        },
        kategori_id_status                = ${
          data.kategori_id_status ? `${data.kategori_id_status}` : null
        },
        nama_spesifikasi_awal             = ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        nama_spesifikasi_akhir            = ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        nama_spesifikasi_status           = ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        jumlah_awal                       = ${
          data.jumlah_awal ? `${data.jumlah_awal}` : null
        },
        jumlah_akhir                      = ${
          data.jumlah_akhir ? `${data.jumlah_akhir}` : null
        },
        jumlah_status                     = ${
          data.jumlah_status ? `${data.jumlah_status}` : null
        },
        a_luas_m2_awal                    = ${
          data.a_luas_m2_awal ? `${data.a_luas_m2_awal}` : null
        },
        a_luas_m2_akhir                   = ${
          data.a_luas_m2_akhir ? `${data.a_luas_m2_akhir}` : null
        },
        a_luas_m2_status                  = ${
          data.a_luas_m2_status ? `${data.a_luas_m2_status}` : null
        },
        satuan                            = ${
          data.satuan ? `'${data.satuan}'` : null
        },
        cara_perolehan_awal               = ${
          data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
        },
        cara_perolehan_akhir              = ${
          data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
        },
        cara_perolehan_status             = ${
          data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
        },
        tgl_perolehan                     = ${
          formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
        },
        tahun_perolehan                   = ${
          data.tahun_perolehan ? `${data.tahun_perolehan}` : null
        },
        perolehan_awal                    = ${
          data.perolehan_awal ? `${data.perolehan_awal}` : null
        },
        perolehan_akhir                   = ${
          data.perolehan_akhir ? `${data.perolehan_akhir}` : null
        },
        perolehan_status                  = ${
          data.perolehan_status ? `${data.perolehan_status}` : null
        },
        atribusi_biaya                    = ${
          data.atribusi_biaya ? `${data.atribusi_biaya}` : 0
        },
        atribusi_status                   = ${
          data.atribusi_status ? `${data.atribusi_status}` : 0
        },
        atribusi_nibar                    = ${
          data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null
        },
        atribusi_kode_barang              = ${
          data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
        },
        atribusi_kode_lokasi              = ${
          data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
        },
        atribusi_no_register              = ${
          data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
        },
        atribusi_nama_barang              = ${
          data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
        },
        atribusi_spesifikasi_barang       = ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
        a_alamat_awal                     = ${
          data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null
        },
        a_alamat_status                   = ${
          data.a_alamat_status ? `${data.a_alamat_status}` : null
        },
        alamat_kota                       = ${
          data.alamat_kota ? `'${data.alamat_kota}'` : null
        },
        alamat_kecamatan                  = ${
          data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null
        },
        alamat_kelurahan                  = ${
          data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null
        },
        alamat_jalan                      = ${
          data.alamat_jalan ? `'${data.alamat_jalan}'` : null
        },
        alamat_no                         = ${
          data.alamat_no ? `'${data.alamat_no}'` : null
        },
        alamat_rt                         = ${
          data.alamat_rt ? `'${data.alamat_rt}'` : null
        },
        alamat_rw                         = ${
          data.alamat_rw ? `'${data.alamat_rw}'` : null
        },
        alamat_kodepos                    = ${
          data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null
        },
        a_hak_tanah_awal                  = ${
          data.a_hak_tanah_awal ? `'${data.a_hak_tanah_awal}'` : null
        },
        a_hak_tanah_akhir                 = ${
          data.a_hak_tanah_akhir ? `'${data.a_hak_tanah_akhir}'` : null
        },
        a_hak_tanah_status                = ${
          data.a_hak_tanah_status ? `${data.a_hak_tanah_status}` : null
        },
        a_sertifikat_nomor_awal           = ${
          data.a_sertifikat_nomor_awal
            ? `'${data.a_sertifikat_nomor_awal}'`
            : null
        },
        a_sertifikat_nomor_akhir          = ${
          data.a_sertifikat_nomor_akhir
            ? `'${data.a_sertifikat_nomor_akhir}'`
            : null
        },
        a_sertifikat_nomor_status         = ${
          data.a_sertifikat_nomor_status
            ? `${data.a_sertifikat_nomor_status}`
            : null
        },
        a_sertifikat_tanggal_awal         = ${
          formattedSertifikatTglAwal ? `'${formattedSertifikatTglAwal}'` : null
        },
        a_sertifikat_tanggal_akhir        = ${
          formattedSertifikatTglAkhir
            ? `'${formattedSertifikatTglAkhir}'`
            : null
        },
        a_sertifikat_tanggal_status       = ${
          data.a_sertifikat_tanggal_status
            ? `${data.a_sertifikat_tanggal_status}`
            : null
        },
        keberadaan_barang_status          = ${
          data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : 0
        },
        kondisi_awal                      = ${
          data.kondisi_awal ? `'${data.kondisi_awal}'` : null
        },
        kondisi_akhir                     = ${
          data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null
        },
        kondisi_status                    = ${
          data.kondisi_status ? `${data.kondisi_status}` : null
        },
        asal_usul_awal                    = ${
          data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null
        },
        asal_usul_akhir                   = ${
          data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null
        },
        asal_usul_status                  = ${
          data.asal_usul_status ? `${data.asal_usul_status}` : null
        },
        penggunaan_status                 = ${
          data.penggunaan_status ? `${data.penggunaan_status}` : null
        },
        penggunaan_awal                   = ${
          data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null
        },
        penggunaan_pemda_status           = ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        penggunaan_pemda_akhir            = ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        penggunaan_pempus_status          = ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        penggunaan_pempus_yt              = ${
          data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null
        },
        penggunaan_pempus_y_nm            = ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        penggunaan_pempus_y_doc           = ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        penggunaan_pempus_t_nm            = ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
        penggunaan_pdl_status             = ${
          data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
        },
        penggunaan_pdl_yt                 = ${
          data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null
        },
        penggunaan_pdl_y_nm               = ${
          data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null
        },
        penggunaan_pdl_y_doc              = ${
          data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
        },
        penggunaan_pdl_t_nm               = ${
          data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null
        },
        penggunaan_pl_status              = ${
          data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null
        },
        penggunaan_pl_yt                  = ${
          data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null
        },
        penggunaan_pl_y_nm                = ${
          data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null
        },
        penggunaan_pl_y_doc               = ${
          data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null
        },
        penggunaan_pl_t_nm                = ${
          data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null
        },
        tercatat_ganda                    = ${
          data.tercatat_ganda ? `${data.tercatat_ganda}` : null
        },
        tercatat_ganda_nibar              = ${
          data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
        },
        tercatat_ganda_no_register        = ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        tercatat_ganda_kode_barang        = ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        tercatat_ganda_nama_barang        = ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        tercatat_ganda_spesifikasi_barang = ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        tercatat_ganda_luas               = ${
          data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null
        },
        tercatat_ganda_satuan             = ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        tercatat_ganda_perolehan          = ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        tercatat_ganda_tanggal_perolehan  = ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        tercatat_ganda_kuasa_pengguna     = ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        pemilik_id                        = ${
          data.pemilik_id ? `${data.pemilik_id}` : null
        },
        lat                               = ${
          data.lat ? `'${data.lat}'` : null
        },
        long                              = ${
          data.long ? `'${data.long}'` : null
        },
        lainnya                           = ${
          data.lainnya ? `'${data.lainnya}'` : null
        },
        keterangan                        = ${
          data.keterangan ? `'${data.keterangan}'` : null
        },
        petugas                           = ${
          data.petugas ? `'${data.petugas}'` : "[]"
        }
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
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]} `
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]} `
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]} `
      : null;

    let query = `
      UPDATE
        aset.kib_inventaris
      SET
        tgl_inventaris                       = ${
          formattedDateInventaris ? `'${formattedDateInventaris}'` : null
        },
        no_register_awal                     = ${
          data.no_register_awal ? `${data.no_register_awal}` : null
        },
        no_register_akhir                    = ${
          data.no_register_akhir ? `${data.no_register_akhir}` : null
        },
        no_register_status                   = ${
          data.no_register_status ? `${data.no_register_status}` : null
        },
        kategori_id_awal                     = ${
          data.kategori_id_awal ? `${data.kategori_id_awal}` : null
        },
        kategori_id_akhir                    = ${
          data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
        },
        kategori_id_status                   = ${
          data.kategori_id_status ? `${data.kategori_id_status}` : null
        },
        nama_spesifikasi_awal                = ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        nama_spesifikasi_akhir               = ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        nama_spesifikasi_status              = ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        jumlah_awal                          = ${
          data.jumlah_awal ? `${data.jumlah_awal}` : null
        },
        satuan                               = ${
          data.satuan ? `'${data.satuan}'` : null
        },
        cara_perolehan_awal                  = ${
          data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
        },
        cara_perolehan_akhir                 = ${
          data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
        },
        cara_perolehan_status                = ${
          data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
        },
        tgl_perolehan                        = ${
          formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
        },
        tahun_perolehan                      = ${
          data.tahun_perolehan ? `${data.tahun_perolehan}` : null
        },
        perolehan_awal                       = ${
          data.perolehan_awal ? `${data.perolehan_awal}` : null
        },
        perolehan_akhir                      = ${
          data.perolehan_akhir ? `${data.perolehan_akhir}` : null
        },
        perolehan_status                     = ${
          data.perolehan_status ? `${data.perolehan_status}` : null
        },
        atribusi_biaya                       = ${
          data.atribusi_biaya ? `${data.atribusi_biaya}` : 0
        },
        atribusi_status                      = ${
          data.atribusi_status ? `${data.atribusi_status}` : 0
        },
        atribusi_nibar                       = ${
          data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null
        },
        atribusi_kode_barang                 = ${
          data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
        },
        atribusi_kode_lokasi                 = ${
          data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
        },
        atribusi_no_register                 = ${
          data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
        },
        atribusi_nama_barang                 = ${
          data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
        },
        atribusi_spesifikasi_barang          = ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
        a_alamat_awal                        = ${
          data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null
        },
        a_alamat_status                      = ${
          data.a_alamat_status ? `${data.a_alamat_status}` : null
        },
        alamat_kota                          = ${
          data.alamat_kota ? `'${data.alamat_kota}'` : null
        },
        alamat_kecamatan                     = ${
          data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null
        },
        alamat_kelurahan                     = ${
          data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null
        },
        alamat_jalan                         = ${
          data.alamat_jalan ? `'${data.alamat_jalan}'` : null
        },
        alamat_no                            = ${
          data.alamat_no ? `'${data.alamat_no}'` : null
        },
        alamat_rt                            = ${
          data.alamat_rt ? `'${data.alamat_rt}'` : null
        },
        alamat_rw                            = ${
          data.alamat_rw ? `'${data.alamat_rw}'` : null
        },
        alamat_kodepos                       = ${
          data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null
        },
        b_merk_awal                          = ${
          data.b_merk_awal ? `'${data.b_merk_awal}'` : null
        },
        b_merk_akhir                         = ${
          data.b_merk_akhir ? `'${data.b_merk_akhir}'` : null
        },
        b_merk_status                        = ${
          data.b_merk_status ? `${data.b_merk_status}` : null
        },
        b_cc_awal                            = ${
          data.b_cc_awal ? `'${data.b_cc_awal}'` : null
        },
        b_cc_akhir                           = ${
          data.b_cc_akhir ? `'${data.b_cc_akhir}'` : null
        },
        b_cc_status                          = ${
          data.b_cc_status ? `${data.b_cc_status}` : null
        },
        b_nomor_polisi_awal                  = ${
          data.b_nomor_polisi_awal ? `'${data.b_nomor_polisi_awal}'` : null
        },
        b_nomor_polisi_akhir                 = ${
          data.b_nomor_polisi_akhir ? `'${data.b_nomor_polisi_akhir}'` : null
        },
        b_nomor_polisi_status                = ${
          data.b_nomor_polisi_status ? `${data.b_nomor_polisi_status}` : null
        },
        b_nomor_rangka_awal                  = ${
          data.b_nomor_rangka_awal ? `'${data.b_nomor_rangka_awal}'` : null
        },
        b_nomor_rangka_akhir                 = ${
          data.b_nomor_rangka_akhir ? `'${data.b_nomor_rangka_akhir}'` : null
        },
        b_nomor_rangka_status                = ${
          data.b_nomor_rangka_status ? `${data.b_nomor_rangka_status}` : null
        },
        b_nomor_mesin_awal                   = ${
          data.b_nomor_mesin_awal ? `'${data.b_nomor_mesin_awal}'` : null
        },
        b_nomor_mesin_akhir                  = ${
          data.b_nomor_mesin_akhir ? `'${data.b_nomor_mesin_akhir}'` : null
        },
        b_nomor_mesin_status                 = ${
          data.b_nomor_mesin_status ? `${data.b_nomor_mesin_status}` : null
        },
        b_nomor_bpkb_awal                    = ${
          data.b_nomor_bpkb_awal ? `'${data.b_nomor_bpkb_awal}'` : null
        },
        b_nomor_bpkb_akhir                   = ${
          data.b_nomor_bpkb_akhir ? `'${data.b_nomor_bpkb_akhir}'` : null
        },
        b_nomor_bpkb_status                  = ${
          data.b_nomor_bpkb_status ? `${data.b_nomor_bpkb_status}` : null
        },
        b_bahan_awal                         = ${
          data.b_bahan_awal ? `'${data.b_bahan_awal}'` : null
        },
        b_bahan_akhir                        = ${
          data.b_bahan_akhir ? `'${data.b_bahan_akhir}'` : null
        },
        b_bahan_status                       = ${
          data.b_bahan_status ? `${data.b_bahan_status}` : null
        },
        b_nomor_pabrik_awal                  = ${
          data.b_nomor_pabrik_awal ? `'${data.b_nomor_pabrik_awal}'` : null
        },
        b_nomor_pabrik_akhir                 = ${
          data.b_nomor_pabrik_akhir ? `'${data.b_nomor_pabrik_akhir}'` : null
        },
        b_nomor_pabrik_status                = ${
          data.b_nomor_pabrik_status ? `${data.b_nomor_pabrik_status}` : null
        },
        kartu_inv_awal                       = ${
          data.kartu_inv_awal ? `'${data.kartu_inv_awal}'` : null
        },
        kartu_inv_akhir                      = ${
          data.kartu_inv_akhir ? `'${data.kartu_inv_akhir}'` : null
        },
        kartu_inv_status                     = ${
          data.kartu_inv_status ? `${data.kartu_inv_status}` : null
        },
        barcode_barang                       = ${
          data.barcode_barang ? `${data.barcode_barang}` : 0
        },
        barcode_ruangan                      = ${
          data.barcode_ruangan ? `${data.barcode_ruangan}` : 0
        },
        keberadaan_barang_akhir              = ${
          data.keberadaan_barang_akhir
            ? `${data.keberadaan_barang_akhir}`
            : null
        },
        keberadaan_barang_status             = ${
          data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : 0
        },
        kondisi_awal                         = ${
          data.kondisi_awal ? `'${data.kondisi_awal}'` : null
        },
        kondisi_akhir                        = ${
          data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null
        },
        kondisi_status                       = ${
          data.kondisi_status ? `${data.kondisi_status}` : null
        },
        asal_usul_awal                       = ${
          data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null
        },
        asal_usul_akhir                      = ${
          data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null
        },
        asal_usul_status                     = ${
          data.asal_usul_status ? `${data.asal_usul_status}` : null
        },
        penggunaan_status                    = ${
          data.penggunaan_status ? `${data.penggunaan_status}` : null
        },
        penggunaan_awal                      = ${
          data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null
        },
        penggunaan_pemda_status              = ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        penggunaan_pemda_akhir               = ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        penggunaan_pemda_nama_pemakai        = ${
          data.penggunaan_pemda_nama_pemakai
            ? `'${data.penggunaan_pemda_nama_pemakai}'`
            : null
        },
        penggunaan_pemda_nama_pemakai_akhir  = ${
          data.penggunaan_pemda_nama_pemakai_akhir
            ? `'${data.penggunaan_pemda_nama_pemakai_akhir}'`
            : null
        },
        penggunaan_pemda_nama_pemakai_status = ${
          data.penggunaan_pemda_nama_pemakai_status
            ? `${data.penggunaan_pemda_nama_pemakai_status}`
            : null
        },
        penggunaan_pemda_status_pemakai      = ${
          data.penggunaan_pemda_status_pemakai
            ? `'${data.penggunaan_pemda_status_pemakai}'`
            : null
        },
        penggunaan_pemda_bast_pemakaian      = ${
          data.penggunaan_pemda_bast_pemakaian
            ? `${data.penggunaan_pemda_bast_pemakaian}`
            : null
        },
        penggunaan_pempus_status             = ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        penggunaan_pempus_yt                 = ${
          data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null
        },
        penggunaan_pempus_y_nm               = ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        penggunaan_pempus_y_doc              = ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        penggunaan_pempus_t_nm               = ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
        penggunaan_pdl_status                = ${
          data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
        },
        penggunaan_pdl_yt                    = ${
          data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null
        },
        penggunaan_pdl_y_nm                  = ${
          data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null
        },
        penggunaan_pdl_y_doc                 = ${
          data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
        },
        penggunaan_pdl_t_nm                  = ${
          data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null
        },
        penggunaan_pl_status                 = ${
          data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null
        },
        penggunaan_pl_yt                     = ${
          data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null
        },
        penggunaan_pl_y_nm                   = ${
          data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null
        },
        penggunaan_pl_y_doc                  = ${
          data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null
        },
        penggunaan_pl_t_nm                   = ${
          data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null
        },
        tercatat_ganda                       = ${
          data.tercatat_ganda ? `${data.tercatat_ganda}` : null
        },
        tercatat_ganda_nibar                 = ${
          data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
        },
        tercatat_ganda_no_register           = ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        tercatat_ganda_kode_barang           = ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        tercatat_ganda_nama_barang           = ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        tercatat_ganda_spesifikasi_barang    = ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        tercatat_ganda_luas                  = ${
          data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null
        },
        tercatat_ganda_satuan                = ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        tercatat_ganda_perolehan             = ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        tercatat_ganda_tanggal_perolehan     = ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        tercatat_ganda_kuasa_pengguna        = ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        pemilik_id                           = ${
          data.pemilik_id ? `${data.pemilik_id}` : null
        },
        lainnya                              = ${
          data.lainnya ? `'${data.lainnya}'` : null
        },
        keterangan                           = ${
          data.keterangan ? `'${data.keterangan}'` : null
        },
        petugas                              = ${
          data.petugas ? `'${data.petugas}'` : "[]"
        }
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
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]} `
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]} `
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]} `
      : null;

    let query = `
      UPDATE
        aset.kib_inventaris
      SET
        tgl_inventaris                       = ${
          formattedDateInventaris ? `'${formattedDateInventaris}'` : null
        },
        no_register_awal                     = ${
          data.no_register_awal ? `${data.no_register_awal}` : null
        },
        no_register_akhir                    = ${
          data.no_register_akhir ? `${data.no_register_akhir}` : null
        },
        no_register_status                   = ${
          data.no_register_status ? `${data.no_register_status}` : null
        },
        kategori_id_awal                     = ${
          data.kategori_id_awal ? `${data.kategori_id_awal}` : null
        },
        kategori_id_akhir                    = ${
          data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
        },
        kategori_id_status                   = ${
          data.kategori_id_status ? `${data.kategori_id_status}` : null
        },
        nama_spesifikasi_awal                = ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        nama_spesifikasi_akhir               = ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        nama_spesifikasi_status              = ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        jumlah_awal                          = ${
          data.jumlah_awal ? `${data.jumlah_awal}` : null
        },
        satuan                               = ${
          data.satuan ? `'${data.satuan}'` : null
        },
        cara_perolehan_awal                  = ${
          data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
        },
        cara_perolehan_akhir                 = ${
          data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
        },
        cara_perolehan_status                = ${
          data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
        },
        tgl_perolehan                        = ${
          formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
        },
        tahun_perolehan                      = ${
          data.tahun_perolehan ? `${data.tahun_perolehan}` : null
        },
        perolehan_awal                       = ${
          data.perolehan_awal ? `${data.perolehan_awal}` : null
        },
        perolehan_akhir                      = ${
          data.perolehan_akhir ? `${data.perolehan_akhir}` : null
        },
        perolehan_status                     = ${
          data.perolehan_status ? `${data.perolehan_status}` : null
        },
        atribusi_biaya                       = ${
          data.atribusi_biaya ? `${data.atribusi_biaya}` : 0
        },
        atribusi_status                      = ${
          data.atribusi_status ? `${data.atribusi_status}` : 0
        },
        atribusi_nibar                       = ${
          data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null
        },
        atribusi_kode_barang                 = ${
          data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
        },
        atribusi_kode_lokasi                 = ${
          data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
        },
        atribusi_no_register                 = ${
          data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
        },
        atribusi_nama_barang                 = ${
          data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
        },
        atribusi_spesifikasi_barang          = ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
        a_alamat_awal                        = ${
          data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null
        },
        a_alamat_status                      = ${
          data.a_alamat_status ? `${data.a_alamat_status}` : null
        },
        alamat_kota                          = ${
          data.alamat_kota ? `'${data.alamat_kota}'` : null
        },
        alamat_kecamatan                     = ${
          data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null
        },
        alamat_kelurahan                     = ${
          data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null
        },
        alamat_jalan                         = ${
          data.alamat_jalan ? `'${data.alamat_jalan}'` : null
        },
        alamat_no                            = ${
          data.alamat_no ? `'${data.alamat_no}'` : null
        },
        alamat_rt                            = ${
          data.alamat_rt ? `'${data.alamat_rt}'` : null
        },
        alamat_rw                            = ${
          data.alamat_rw ? `'${data.alamat_rw}'` : null
        },
        alamat_kodepos                       = ${
          data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null
        },
        c_luas_bangunan_awal                 = ${
          data.c_luas_bangunan_awal ? `${data.c_luas_bangunan_awal}` : null
        },
        c_luas_bangunan_akhir                = ${
          data.c_luas_bangunan_akhir ? `${data.c_luas_bangunan_akhir}` : null
        },
        c_luas_bangunan_status               = ${
          data.c_luas_bangunan_status ? `${data.c_luas_bangunan_status}` : null
        },
        c_satuan_bangunan                    = ${
          data.c_satuan_bangunan ? `'${data.c_satuan_bangunan}'` : null
        },
        c_bertingkat                         = ${
          data.c_bertingkat ? `${data.c_bertingkat}` : 0
        },
        c_beton                              = ${
          data.c_beton ? `${data.c_beton}` : 0
        },
        c_luas_tanah_awal                    = ${
          data.c_luas_tanah_awal ? `${data.c_luas_tanah_awal}` : null
        },
        c_luas_tanah_akhir                   = ${
          data.c_luas_tanah_akhir ? `${data.c_luas_tanah_akhir}` : null
        },
        c_luas_tanah_status                  = ${
          data.c_luas_tanah_status ? `${data.c_luas_tanah_status}` : null
        },
        c_satuan_tanah                       = ${
          data.c_satuan_tanah ? `'${data.c_satuan_tanah}'` : null
        },
        c_status_tanah_awal                  = ${
          data.c_status_tanah_awal ? `'${data.c_status_tanah_awal}'` : null
        },
        keberadaan_barang_status             = ${
          data.keberadaan_barang_status ? `${data.keberadaan_barang_status}` : 0
        },
        kondisi_awal                         = ${
          data.kondisi_awal ? `'${data.kondisi_awal}'` : null
        },
        kondisi_akhir                        = ${
          data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null
        },
        kondisi_status                       = ${
          data.kondisi_status ? `${data.kondisi_status}` : null
        },
        asal_usul_awal                       = ${
          data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null
        },
        asal_usul_akhir                      = ${
          data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null
        },
        asal_usul_status                     = ${
          data.asal_usul_status ? `${data.asal_usul_status}` : null
        },
        penggunaan_status                    = ${
          data.penggunaan_status ? `${data.penggunaan_status}` : null
        },
        penggunaan_awal                      = ${
          data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null
        },
        penggunaan_pemda_status              = ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        penggunaan_pemda_akhir               = ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        penggunaan_pemda_nama_pemakai        = ${
          data.penggunaan_pemda_nama_pemakai
            ? `'${data.penggunaan_pemda_nama_pemakai}'`
            : null
        },
        penggunaan_pemda_nama_pemakai_akhir  = ${
          data.penggunaan_pemda_nama_pemakai_akhir
            ? `'${data.penggunaan_pemda_nama_pemakai_akhir}'`
            : null
        },
        penggunaan_pemda_nama_pemakai_status = ${
          data.penggunaan_pemda_nama_pemakai_status
            ? `${data.penggunaan_pemda_nama_pemakai_status}`
            : null
        },
        penggunaan_pemda_status_pemakai      = ${
          data.penggunaan_pemda_status_pemakai
            ? `'${data.penggunaan_pemda_status_pemakai}'`
            : null
        },
        penggunaan_pemda_bast_pemakaian      = ${
          data.penggunaan_pemda_bast_pemakaian
            ? `${data.penggunaan_pemda_bast_pemakaian}`
            : null
        },
        penggunaan_pemda_sip                 = ${
          data.penggunaan_pemda_sip ? `${data.penggunaan_pemda_sip}` : null
        },
        penggunaan_pemda_imb                 = ${
          data.penggunaan_pemda_imb ? `'${data.penggunaan_pemda_imb}'` : null
        },
        penggunaan_pempus_status             = ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        penggunaan_pempus_yt                 = ${
          data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null
        },
        penggunaan_pempus_y_nm               = ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        penggunaan_pempus_y_doc              = ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        penggunaan_pempus_t_nm               = ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
        penggunaan_pdl_status                = ${
          data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
        },
        penggunaan_pdl_yt                    = ${
          data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null
        },
        penggunaan_pdl_y_nm                  = ${
          data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null
        },
        penggunaan_pdl_y_doc                 = ${
          data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
        },
        penggunaan_pdl_t_nm                  = ${
          data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null
        },
        penggunaan_pl_status                 = ${
          data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null
        },
        penggunaan_pl_yt                     = ${
          data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null
        },
        penggunaan_pl_y_nm                   = ${
          data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null
        },
        penggunaan_pl_y_doc                  = ${
          data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null
        },
        penggunaan_pl_t_nm                   = ${
          data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null
        },
        tercatat_ganda                       = ${
          data.tercatat_ganda ? `${data.tercatat_ganda}` : null
        },
        tercatat_ganda_nibar                 = ${
          data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
        },
        tercatat_ganda_no_register           = ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        tercatat_ganda_kode_barang           = ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        tercatat_ganda_nama_barang           = ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        tercatat_ganda_spesifikasi_barang    = ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        tercatat_ganda_luas                  = ${
          data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null
        },
        tercatat_ganda_satuan                = ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        tercatat_ganda_perolehan             = ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        tercatat_ganda_tanggal_perolehan     = ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        tercatat_ganda_kuasa_pengguna        = ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        pemilik_id                           = ${
          data.pemilik_id ? `${data.pemilik_id}` : null
        },
        lat                                  = ${
          data.lat ? `'${data.lat}'` : null
        },
        long                                 = ${
          data.long ? `'${data.long}'` : null
        },
        lainnya                              = ${
          data.lainnya ? `'${data.lainnya}'` : null
        },
        keterangan                           = ${
          data.keterangan ? `'${data.keterangan}'` : null
        },
        petugas                              = ${
          data.petugas ? `'${data.petugas}'` : "[]"
        }
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
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]} `
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]} `
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]} `
      : null;

    let query = `
      UPDATE
        aset.kib_inventaris
      SET
        tgl_inventaris                    = ${
          formattedDateInventaris ? `'${formattedDateInventaris}'` : null
        },
        no_register_awal                  = ${
          data.no_register_awal ? `${data.no_register_awal}` : null
        },
        no_register_akhir                 = ${
          data.no_register_akhir ? `${data.no_register_akhir}` : null
        },
        no_register_status                = ${
          data.no_register_status ? `${data.no_register_status}` : null
        },
        kategori_id_awal                  = ${
          data.kategori_id_awal ? `${data.kategori_id_awal}` : null
        },
        kategori_id_akhir                 = ${
          data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
        },
        kategori_id_status                = ${
          data.kategori_id_status ? `${data.kategori_id_status}` : null
        },
        nama_spesifikasi_awal             = ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        nama_spesifikasi_akhir            = ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        nama_spesifikasi_status           = ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        jumlah_awal                       = ${
          data.jumlah_awal ? `${data.jumlah_awal}` : null
        },
        satuan                            = ${
          data.satuan ? `'${data.satuan}'` : null
        },
        cara_perolehan_awal               = ${
          data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
        },
        cara_perolehan_akhir              = ${
          data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
        },
        cara_perolehan_status             = ${
          data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
        },
        tgl_perolehan                     = ${
          formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
        },
        tahun_perolehan                   = ${
          data.tahun_perolehan ? `${data.tahun_perolehan}` : null
        },
        perolehan_awal                    = ${
          data.perolehan_awal ? `${data.perolehan_awal}` : null
        },
        perolehan_akhir                   = ${
          data.perolehan_akhir ? `${data.perolehan_akhir}` : null
        },
        perolehan_status                  = ${
          data.perolehan_status ? `${data.perolehan_status}` : null
        },
        atribusi_biaya                    = ${
          data.atribusi_biaya ? `${data.atribusi_biaya}` : 0
        },
        atribusi_status                   = ${
          data.atribusi_status ? `${data.atribusi_status}` : 0
        },
        atribusi_nibar                    = ${
          data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null
        },
        atribusi_kode_barang              = ${
          data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
        },
        atribusi_kode_lokasi              = ${
          data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
        },
        atribusi_no_register              = ${
          data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
        },
        atribusi_nama_barang              = ${
          data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
        },
        atribusi_spesifikasi_barang       = ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
        a_alamat_awal                     = ${
          data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null
        },
        a_alamat_status                   = ${
          data.a_alamat_status ? `${data.a_alamat_status}` : null
        },
        alamat_kota                       = ${
          data.alamat_kota ? `'${data.alamat_kota}'` : null
        },
        alamat_kecamatan                  = ${
          data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null
        },
        alamat_kelurahan                  = ${
          data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null
        },
        alamat_jalan                      = ${
          data.alamat_jalan ? `'${data.alamat_jalan}'` : null
        },
        alamat_no                         = ${
          data.alamat_no ? `'${data.alamat_no}'` : null
        },
        alamat_rt                         = ${
          data.alamat_rt ? `'${data.alamat_rt}'` : null
        },
        alamat_rw                         = ${
          data.alamat_rw ? `'${data.alamat_rw}'` : null
        },
        alamat_kodepos                    = ${
          data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null
        },
        keberadaan_barang_status          = ${
          data.keberadaan_barang_status
            ? `${data.keberadaan_barang_status}`
            : null
        },
        kondisi_awal                      = ${
          data.kondisi_awal ? `'${data.kondisi_awal}'` : null
        },
        kondisi_akhir                     = ${
          data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null
        },
        kondisi_status                    = ${
          data.kondisi_status ? `${data.kondisi_status}` : null
        },
        asal_usul_awal                    = ${
          data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null
        },
        asal_usul_akhir                   = ${
          data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null
        },
        asal_usul_status                  = ${
          data.asal_usul_status ? `${data.asal_usul_status}` : null
        },
        penggunaan_status                 = ${
          data.penggunaan_status ? `${data.penggunaan_status}` : null
        },
        penggunaan_awal                   = ${
          data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null
        },
        penggunaan_pemda_status           = ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        penggunaan_pemda_akhir            = ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        penggunaan_pempus_status          = ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        penggunaan_pempus_yt              = ${
          data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null
        },
        penggunaan_pempus_y_nm            = ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        penggunaan_pempus_y_doc           = ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        penggunaan_pempus_t_nm            = ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
        penggunaan_pdl_status             = ${
          data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
        },
        penggunaan_pdl_yt                 = ${
          data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null
        },
        penggunaan_pdl_y_nm               = ${
          data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null
        },
        penggunaan_pdl_y_doc              = ${
          data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
        },
        penggunaan_pdl_t_nm               = ${
          data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null
        },
        penggunaan_pl_status              = ${
          data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null
        },
        penggunaan_pl_yt                  = ${
          data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null
        },
        penggunaan_pl_y_nm                = ${
          data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null
        },
        penggunaan_pl_y_doc               = ${
          data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null
        },
        penggunaan_pl_t_nm                = ${
          data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null
        },
        d_jenis_pengkerasan_jln_awal      = ${
          data.d_jenis_pengkerasan_jln_awal
            ? `'${data.d_jenis_pengkerasan_jln_awal}'`
            : null
        },
        d_jenis_pengkerasan_jln_akhir     = ${
          data.d_jenis_pengkerasan_jln_akhir
            ? `'${data.d_jenis_pengkerasan_jln_akhir}'`
            : null
        },
        d_jenis_pengkerasan_jln_status    = ${
          data.d_jenis_pengkerasan_jln_status
            ? `${data.d_jenis_pengkerasan_jln_status}`
            : null
        },
        d_jenis_bahan_jembatan_awal       = ${
          data.d_jenis_bahan_jembatan_awal
            ? `'${data.d_jenis_bahan_jembatan_awal}'`
            : null
        },
        d_jenis_bahan_jembatan_akhir      = ${
          data.d_jenis_bahan_jembatan_akhir
            ? `'${data.d_jenis_bahan_jembatan_akhir}'`
            : null
        },
        d_jenis_bahan_jembatan_status     = ${
          data.d_jenis_bahan_jembatan_status
            ? `${data.d_jenis_bahan_jembatan_status}`
            : null
        },
        d_nomor_ruas_jln_awal             = ${
          data.d_nomor_ruas_jln_awal ? `'${data.d_nomor_ruas_jln_awal}'` : null
        },
        d_nomor_ruas_jln_akhir            = ${
          data.d_nomor_ruas_jln_akhir
            ? `'${data.d_nomor_ruas_jln_akhir}'`
            : null
        },
        d_nomor_ruas_jln_status           = ${
          data.d_nomor_ruas_jln_status
            ? `${data.d_nomor_ruas_jln_status}`
            : null
        },
        d_nomor_jaringan_irigasi_awal     = ${
          data.d_nomor_jaringan_irigasi_awal
            ? `'${data.d_nomor_jaringan_irigasi_awal}'`
            : null
        },
        d_nomor_jaringan_irigasi_akhir    = ${
          data.d_nomor_jaringan_irigasi_akhir
            ? `'${data.d_nomor_jaringan_irigasi_akhir}'`
            : null
        },
        d_nomor_jaringan_irigasi_status   = ${
          data.d_nomor_jaringan_irigasi_status
            ? `${data.d_nomor_jaringan_irigasi_status}`
            : null
        },
        d_konstruksi_awal                 = ${
          data.d_konstruksi_awal ? `'${data.d_konstruksi_awal}'` : null
        },
        d_konstruksi_akhir                = ${
          data.d_konstruksi_akhir ? `'${data.d_konstruksi_akhir}'` : null
        },
        d_konstruksi_status               = ${
          data.d_konstruksi_status ? `${data.d_konstruksi_status}` : null
        },
        d_panjang_awal                    = ${
          data.d_panjang_awal ? `${data.d_panjang_awal}` : null
        },
        d_panjang_akhir                   = ${
          data.d_panjang_akhir ? `${data.d_panjang_akhir}` : null
        },
        d_panjang_status                  = ${
          data.d_panjang_status ? `${data.d_panjang_status}` : null
        },
        d_panjang_satuan                  = ${
          data.d_panjang_satuan ? `'${data.d_panjang_satuan}'` : null
        },
        d_lebar_awal                      = ${
          data.d_lebar_awal ? `${data.d_lebar_awal}` : null
        },
        d_lebar_akhir                     = ${
          data.d_lebar_akhir ? `${data.d_lebar_akhir}` : null
        },
        d_lebar_status                    = ${
          data.d_lebar_status ? `${data.d_lebar_status}` : null
        },
        d_lebar_satuan                    = ${
          data.d_lebar_satuan ? `'${data.d_lebar_satuan}'` : null
        },
        d_luas_awal                       = ${
          data.d_luas_awal ? `${data.d_luas_awal}` : null
        },
        d_luas_akhir                      = ${
          data.d_luas_akhir ? `${data.d_luas_akhir}` : null
        },
        d_luas_status                     = ${
          data.d_luas_status ? `${data.d_luas_status}` : null
        },
        d_luas_satuan                     = ${
          data.d_luas_satuan ? `'${data.d_luas_satuan}'` : null
        },
        d_luas_tanah                      = ${
          data.d_luas_tanah ? `'${data.d_luas_tanah}'` : null
        },
        d_status_tanah                    = ${
          data.d_status_tanah ? `'${data.d_status_tanah}'` : null
        },
        tercatat_ganda                    = ${
          data.tercatat_ganda ? `${data.tercatat_ganda}` : null
        },
        tercatat_ganda_nibar              = ${
          data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
        },
        tercatat_ganda_no_register        = ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        tercatat_ganda_kode_barang        = ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        tercatat_ganda_nama_barang        = ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        tercatat_ganda_spesifikasi_barang = ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        tercatat_ganda_luas               = ${
          data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null
        },
        tercatat_ganda_satuan             = ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        tercatat_ganda_perolehan          = ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        tercatat_ganda_tanggal_perolehan  = ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        tercatat_ganda_kuasa_pengguna     = ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        pemilik_id                        = ${
          data.pemilik_id ? `${data.pemilik_id}` : null
        },
        lat                               = ${
          data.lat ? `'${data.lat}'` : null
        },
        long                              = ${
          data.long ? `'${data.long}'` : null
        },
        lainnya                           = ${
          data.lainnya ? `'${data.lainnya}'` : null
        },
        keterangan                        = ${
          data.keterangan ? `'${data.keterangan}'` : null
        },
        petugas                           = ${
          data.petugas ? `'${data.petugas}'` : "[]"
        }
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

  updateInventarisE: (kib_id, data) => {
    const partsInventaris = data.tgl_inventaris
      ? data.tgl_inventaris.split("-")
      : null;
    const partsPerolehan = data.tgl_perolehan
      ? data.tgl_perolehan.split("-")
      : null;
    const partsTercatatGandaTglPerolehan = data.tercatat_ganda_tanggal_perolehan
      ? data.tercatat_ganda_tanggal_perolehan.split("-")
      : null;

    const formattedDateInventaris = partsInventaris
      ? `${partsInventaris[2]}-${partsInventaris[1]}-${partsInventaris[0]} `
      : null;
    const formattedDatePerolehan = partsPerolehan
      ? `${partsPerolehan[2]}-${partsPerolehan[1]}-${partsPerolehan[0]} `
      : null;
    const formattedTercatatGandaTglPerolehan = partsTercatatGandaTglPerolehan
      ? `${partsTercatatGandaTglPerolehan[2]}-${partsTercatatGandaTglPerolehan[1]}-${partsTercatatGandaTglPerolehan[0]} `
      : null;

    let query = `
      UPDATE
        aset.kib_inventaris
      SET
        tgl_inventaris                    = ${
          formattedDateInventaris ? `'${formattedDateInventaris}'` : null
        },
        no_register_awal                  = ${
          data.no_register_awal ? `${data.no_register_awal}` : null
        },
        no_register_akhir                 = ${
          data.no_register_akhir ? `${data.no_register_akhir}` : null
        },
        no_register_status                = ${
          data.no_register_status ? `${data.no_register_status}` : null
        },
        kategori_id_awal                  = ${
          data.kategori_id_awal ? `${data.kategori_id_awal}` : null
        },
        kategori_id_akhir                 = ${
          data.kategori_id_akhir ? `${data.kategori_id_akhir}` : null
        },
        kategori_id_status                = ${
          data.kategori_id_status ? `${data.kategori_id_status}` : null
        },
        nama_spesifikasi_awal             = ${
          data.nama_spesifikasi_awal ? `'${data.nama_spesifikasi_awal}'` : null
        },
        nama_spesifikasi_akhir            = ${
          data.nama_spesifikasi_akhir
            ? `'${data.nama_spesifikasi_akhir}'`
            : null
        },
        nama_spesifikasi_status           = ${
          data.nama_spesifikasi_status
            ? `${data.nama_spesifikasi_status}`
            : null
        },
        jumlah_awal                       = ${
          data.jumlah_awal ? `${data.jumlah_awal}` : null
        },
        satuan                            = ${
          data.satuan ? `'${data.satuan}'` : null
        },
        cara_perolehan_awal               = ${
          data.cara_perolehan_awal ? `'${data.cara_perolehan_awal}'` : null
        },
        cara_perolehan_akhir              = ${
          data.cara_perolehan_akhir ? `'${data.cara_perolehan_akhir}'` : null
        },
        cara_perolehan_status             = ${
          data.cara_perolehan_status ? `${data.cara_perolehan_status}` : null
        },
        tgl_perolehan                     = ${
          formattedDatePerolehan ? `'${formattedDatePerolehan}'` : null
        },
        tahun_perolehan                   = ${
          data.tahun_perolehan ? `${data.tahun_perolehan}` : null
        },
        perolehan_awal                    = ${
          data.perolehan_awal ? `${data.perolehan_awal}` : null
        },
        perolehan_akhir                   = ${
          data.perolehan_akhir ? `${data.perolehan_akhir}` : null
        },
        perolehan_status                  = ${
          data.perolehan_status ? `${data.perolehan_status}` : null
        },
        atribusi_biaya                    = ${
          data.atribusi_biaya ? `${data.atribusi_biaya}` : 0
        },
        atribusi_status                   = ${
          data.atribusi_status ? `${data.atribusi_status}` : 0
        },
        atribusi_nibar                    = ${
          data.atribusi_nibar ? `'${data.atribusi_nibar}'` : null
        },
        atribusi_kode_barang              = ${
          data.atribusi_kode_barang ? `'${data.atribusi_kode_barang}'` : null
        },
        atribusi_kode_lokasi              = ${
          data.atribusi_kode_lokasi ? `'${data.atribusi_kode_lokasi}'` : null
        },
        atribusi_no_register              = ${
          data.atribusi_no_register ? `'${data.atribusi_no_register}'` : null
        },
        atribusi_nama_barang              = ${
          data.atribusi_nama_barang ? `'${data.atribusi_nama_barang}'` : null
        },
        atribusi_spesifikasi_barang       = ${
          data.atribusi_spesifikasi_barang
            ? `'${data.atribusi_spesifikasi_barang}'`
            : null
        },
        a_alamat_awal                     = ${
          data.a_alamat_awal ? `'${data.a_alamat_awal}'` : null
        },
        a_alamat_status                   = ${
          data.a_alamat_status ? `${data.a_alamat_status}` : null
        },
        alamat_kota                       = ${
          data.alamat_kota ? `'${data.alamat_kota}'` : null
        },
        alamat_kecamatan                  = ${
          data.alamat_kecamatan ? `'${data.alamat_kecamatan}'` : null
        },
        alamat_kelurahan                  = ${
          data.alamat_kelurahan ? `'${data.alamat_kelurahan}'` : null
        },
        alamat_jalan                      = ${
          data.alamat_jalan ? `'${data.alamat_jalan}'` : null
        },
        alamat_no                         = ${
          data.alamat_no ? `'${data.alamat_no}'` : null
        },
        alamat_rt                         = ${
          data.alamat_rt ? `'${data.alamat_rt}'` : null
        },
        alamat_rw                         = ${
          data.alamat_rw ? `'${data.alamat_rw}'` : null
        },
        alamat_kodepos                    = ${
          data.alamat_kodepos ? `'${data.alamat_kodepos}'` : null
        },
        e_spek_awal                       = ${
          data.e_spek_awal ? `'${data.e_spek_awal}'` : null
        },
        e_spek_akhir                      = ${
          data.e_spek_akhir ? `'${data.e_spek_akhir}'` : null
        },
        e_spek_status                     = ${
          data.e_spek_status ? `${data.e_spek_status}` : null
        },
        e_judul_awal                      = ${
          data.e_judul_awal ? `'${data.e_judul_awal}'` : null
        },
        e_judul_akhir                     = ${
          data.e_judul_akhir ? `'${data.e_judul_akhir}'` : null
        },
        e_judul_status                    = ${
          data.e_judul_status ? `${data.e_judul_status}` : null
        },
        e_jenis_awal                      = ${
          data.e_jenis_awal ? `'${data.e_jenis_awal}'` : null
        },
        e_jenis_akhir                     = ${
          data.e_jenis_akhir ? `'${data.e_jenis_akhir}'` : null
        },
        e_jenis_status                    = ${
          data.e_jenis_status ? `${data.e_jenis_status}` : null
        },
        e_bahan_awal                      = ${
          data.e_bahan_awal ? `'${data.e_bahan_awal}'` : null
        },
        e_bahan_akhir                     = ${
          data.e_bahan_akhir ? `'${data.e_bahan_akhir}'` : null
        },
        e_bahan_status                    = ${
          data.e_bahan_status ? `${data.e_bahan_status}` : null
        },
        e_pencipta_awal                   = ${
          data.e_pencipta_awal ? `'${data.e_pencipta_awal}'` : null
        },
        e_pencipta_akhir                  = ${
          data.e_pencipta_akhir ? `'${data.e_pencipta_akhir}'` : null
        },
        e_pencipta_status                 = ${
          data.e_pencipta_status ? `${data.e_pencipta_status}` : null
        },
        e_ukuran_awal                     = ${
          data.e_ukuran_awal ? `'${data.e_ukuran_awal}'` : null
        },
        e_ukuran_akhir                    = ${
          data.e_ukuran_akhir ? `'${data.e_ukuran_akhir}'` : null
        },
        e_ukuran_status                   = ${
          data.e_ukuran_status ? `${data.e_ukuran_status}` : null
        },
        keberadaan_barang_status          = ${
          data.keberadaan_barang_status
            ? `${data.keberadaan_barang_status}`
            : null
        },
        kondisi_awal                      = ${
          data.kondisi_awal ? `'${data.kondisi_awal}'` : null
        },
        kondisi_akhir                     = ${
          data.kondisi_akhir ? `'${data.kondisi_akhir}'` : null
        },
        kondisi_status                    = ${
          data.kondisi_status ? `${data.kondisi_status}` : null
        },
        asal_usul_awal                    = ${
          data.asal_usul_awal ? `'${data.asal_usul_awal}'` : null
        },
        asal_usul_akhir                   = ${
          data.asal_usul_akhir ? `'${data.asal_usul_akhir}'` : null
        },
        asal_usul_status                  = ${
          data.asal_usul_status ? `${data.asal_usul_status}` : null
        },
        penggunaan_status                 = ${
          data.penggunaan_status ? `${data.penggunaan_status}` : null
        },
        penggunaan_awal                   = ${
          data.penggunaan_awal ? `'${data.penggunaan_awal}'` : null
        },
        penggunaan_pemda_status           = ${
          data.penggunaan_pemda_status
            ? `${data.penggunaan_pemda_status}`
            : null
        },
        penggunaan_pemda_akhir            = ${
          data.penggunaan_pemda_akhir
            ? `'${data.penggunaan_pemda_akhir}'`
            : null
        },
        penggunaan_pempus_status          = ${
          data.penggunaan_pempus_status
            ? `${data.penggunaan_pempus_status}`
            : null
        },
        penggunaan_pempus_yt              = ${
          data.penggunaan_pempus_yt ? `${data.penggunaan_pempus_yt}` : null
        },
        penggunaan_pempus_y_nm            = ${
          data.penggunaan_pempus_y_nm
            ? `'${data.penggunaan_pempus_y_nm}'`
            : null
        },
        penggunaan_pempus_y_doc           = ${
          data.penggunaan_pempus_y_doc
            ? `'${data.penggunaan_pempus_y_doc}'`
            : null
        },
        penggunaan_pempus_t_nm            = ${
          data.penggunaan_pempus_t_nm
            ? `'${data.penggunaan_pempus_t_nm}'`
            : null
        },
        penggunaan_pdl_status             = ${
          data.penggunaan_pdl_status ? `${data.penggunaan_pdl_status}` : null
        },
        penggunaan_pdl_yt                 = ${
          data.penggunaan_pdl_yt ? `${data.penggunaan_pdl_yt}` : null
        },
        penggunaan_pdl_y_nm               = ${
          data.penggunaan_pdl_y_nm ? `'${data.penggunaan_pdl_y_nm}'` : null
        },
        penggunaan_pdl_y_doc              = ${
          data.penggunaan_pdl_y_doc ? `'${data.penggunaan_pdl_y_doc}'` : null
        },
        penggunaan_pdl_t_nm               = ${
          data.penggunaan_pdl_t_nm ? `'${data.penggunaan_pdl_t_nm}'` : null
        },
        penggunaan_pl_status              = ${
          data.penggunaan_pl_status ? `${data.penggunaan_pl_status}` : null
        },
        penggunaan_pl_yt                  = ${
          data.penggunaan_pl_yt ? `${data.penggunaan_pl_yt}` : null
        },
        penggunaan_pl_y_nm                = ${
          data.penggunaan_pl_y_nm ? `'${data.penggunaan_pl_y_nm}'` : null
        },
        penggunaan_pl_y_doc               = ${
          data.penggunaan_pl_y_doc ? `'${data.penggunaan_pl_y_doc}'` : null
        },
        penggunaan_pl_t_nm                = ${
          data.penggunaan_pl_t_nm ? `'${data.penggunaan_pl_t_nm}'` : null
        },
        tercatat_ganda                    = ${
          data.tercatat_ganda ? `${data.tercatat_ganda}` : null
        },
        tercatat_ganda_nibar              = ${
          data.tercatat_ganda_nibar ? `'${data.tercatat_ganda_nibar}'` : null
        },
        tercatat_ganda_no_register        = ${
          data.tercatat_ganda_no_register
            ? `'${data.tercatat_ganda_no_register}'`
            : null
        },
        tercatat_ganda_kode_barang        = ${
          data.tercatat_ganda_kode_barang
            ? `'${data.tercatat_ganda_kode_barang}'`
            : null
        },
        tercatat_ganda_nama_barang        = ${
          data.tercatat_ganda_nama_barang
            ? `'${data.tercatat_ganda_nama_barang}'`
            : null
        },
        tercatat_ganda_spesifikasi_barang = ${
          data.tercatat_ganda_spesifikasi_barang
            ? `'${data.tercatat_ganda_spesifikasi_barang}'`
            : null
        },
        tercatat_ganda_luas               = ${
          data.tercatat_ganda_luas ? `'${data.tercatat_ganda_luas}'` : null
        },
        tercatat_ganda_satuan             = ${
          data.tercatat_ganda_satuan ? `'${data.tercatat_ganda_satuan}'` : null
        },
        tercatat_ganda_perolehan          = ${
          data.tercatat_ganda_perolehan
            ? `'${data.tercatat_ganda_perolehan}'`
            : null
        },
        tercatat_ganda_tanggal_perolehan  = ${
          formattedTercatatGandaTglPerolehan
            ? `'${formattedTercatatGandaTglPerolehan}'`
            : null
        },
        tercatat_ganda_kuasa_pengguna     = ${
          data.tercatat_ganda_kuasa_pengguna
            ? `'${data.tercatat_ganda_kuasa_pengguna}'`
            : null
        },
        pemilik_id                        = ${
          data.pemilik_id ? `${data.pemilik_id}` : null
        },
        lainnya                           = ${
          data.lainnya ? `'${data.lainnya}'` : null
        },
        keterangan                        = ${
          data.keterangan ? `'${data.keterangan}'` : null
        },
        petugas                           = ${
          data.petugas ? `'${data.petugas}'` : "[]"
        }
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

  // Select KIBS
  SelectKIBS: (
    kodeDepartemen,
    kodeKategori,
    perPage = 10,
    page = 1,
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
    SELECT
      p.id as penetapan_id,
      p.kib_id as id,
      k.kode as kode_barang,
      p.no_register,
      k.nama as uraian,
      p.a_alamat,
      p.tgl_perolehan,
      p.th_beli,
      p.perolehan,
      p.kondisi,
      p.masa_manfaat,
      k.id as id_barang,
      p.kib,
      p.keterangan,
      '12.32.71.'|| p.th_beli || '.' || k.kode || '.' || LPAD(p.no_id::text, 6, '0') as nibar
    FROM
      aset.penetapan AS p
    JOIN 
      aset.kategoris AS k ON p.kategori_id = k.id
    JOIN
      departemen AS d ON p.departemen_id = d.id
    LEFT JOIN
      aset.inventaris_kib AS inv ON inv.penetapan_id = p.id
    WHERE 
      d.kode = '${kodeDepartemen}' AND p.thn_nilai = ${
      tahun - 1
    } AND k.kode LIKE '%${kodeKategori}%' AND p.kondisi = 'B'
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default inventarisModel;
