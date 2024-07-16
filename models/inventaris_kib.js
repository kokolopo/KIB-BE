import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class inventaris_kib extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    update_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    penetapan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kib_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departemen_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tgl_inventaris: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nibar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_register_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_register_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_register_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_spesifikasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_spesifikasi_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nama_spesifikasi_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jumlah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    satuan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    cara_perolehan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cara_perolehan_awal: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    cara_perolehan_akhir: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    tgl_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    thn_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perolehan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perolehan_awal: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    perolehan_akhir: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    atribusi_biaya: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_kib_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_nibar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    atribusi_kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_kategori_kd: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    atribusi_kategori_nm: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    atribusi_kode_lokasi: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    atribusi_no_register: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    atribusi_nama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alamat_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alamat_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alamat_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alamat_kota: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    alamat_kecamatan: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    alamat_kelurahan: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    alamat_jalan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alamat_no: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    alamat_rt: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    alamat_rw: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    alamat_kode_pos: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    a_luas_m2_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_luas_m2_awal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    a_luas_m2_akhir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    a_hak_tanah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_hak_tanah_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_hak_tanah_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_sertifikat_tanggal_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_sertifikat_tanggal_awal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    a_sertifikat_tanggal_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    a_sertifikat_nomor_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_sertifikat_nomor_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_sertifikat_nomor_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_merk_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_merk_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_merk_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_type_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_type_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_type_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_cc_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_cc_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_cc_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_nomor_polisi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_polisi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_polisi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_rangka_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_rangka_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_rangka_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_mesin_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_mesin_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_mesin_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_bpkb_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_bpkb_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_nomor_bpkb_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_bahan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_bahan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    b_bahan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_luas_bangunan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_satuan_bangunan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    c_beton_tidak_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_beton_tidak_awal: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    c_beton_tidak_akhir: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    c_bertingkat_tidak_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_bertingkat_tidak_awal: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    c_bertingkat_tidak_akhir: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    c_luas_lantai: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_status_tanah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_perkerasan_jalan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_jenis_perkerasan_jalan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_perkerasan_jalan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_bahan_struktur_jembatan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_jenis_bahan_struktur_jembatan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_bahan_struktur_jembatan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_ruas_jalan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_nomor_ruas_jalan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_ruas_jalan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_jaringan_irigasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_nomor_jaringan_irigasi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_jaringan_irigasi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_konstruksi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_konstruksi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_konstruksi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_panjang: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    d_panjang_satuan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    d_lebar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    d_lebar_satuan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    d_luas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    d_luas_satuan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    d_luas_tanah: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    d_status_tanah: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    e_spek: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_judul: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_jenis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_bahan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_pencipta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_ukuran: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    merk_type_spesifikasi_lainnya: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kartu_inventaris_ruangan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kartu_inventaris_ruangan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kartu_inventaris_ruangan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    barcode_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode_ruangan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_barang_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_barang_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kondisi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kondisi_awal: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kondisi_akhir: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    asal_usul_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asal_usul_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asal_usul_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    penggunaan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pemda_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pemda_nama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    penggunaan_barang_pemda_doc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    penggunaan_barang_pemda_status_pemakai: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    penggunaan_barang_pemda_bast: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pemda_sip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pemda_imb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pempus_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pempus_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pempus_y_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pempus_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pempus_t_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pdl_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pdl_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pdl_y_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pdl_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pdl_t_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pl_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pl_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_barang_pl_y_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pl_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_barang_pl_t_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_kib_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_nibar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tercatat_ganda_no_register: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_kategori_kd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_kategori_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_nama_spesifikasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tercatat_ganda_luas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_satuan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_perolehan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_tgl_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tercatat_ganda_kuasa_pengguna: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diatas_tanah_milik: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diatas_tanah_milik_pemda: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diatas_tanah_milik_pempus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diatas_tanah_milik_pdl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diatas_tanah_milik_pl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kuasa_pengguna_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_pengguna_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_pengelola_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_kategori_kd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kategori_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    belum_tercatat_no_register: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_tgl_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    belum_tercatat_thn_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_cara_perolehan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    belum_tercatat_merk_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    belum_tercatat_nomor_polisi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_rangka: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_mesin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_bpkb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_stnk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_bahan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_warna: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_ukuran_cc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_ruang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_satuan: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    belum_tercatat_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    belum_tercatat_dasar_pencatatan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kondisi: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    belum_tercatat_lainnya: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lainnya: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_nm: {
      type: DataTypes.JSON,
      allowNull: true
    },
    petugas: {
      type: DataTypes.JSON,
      allowNull: true
    },
    is_api: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventaris_kib',
    schema: 'aset',
    timestamps: false,
    indexes: [
      {
        name: "inventaris_kib_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
