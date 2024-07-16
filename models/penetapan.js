import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class penetapan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uraian: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tahun: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    no_register: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cara_perolehan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    th_beli: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asal_usul: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    harga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    jumlah: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    satuan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kondisi: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    masa_manfaat: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nilai_sisa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    masa_sisa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    penyusutan: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    akumulasi: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    thn_nilai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_sp2d: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    no_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kib: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    a_rtrw: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_nop: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_luas_m2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    a_alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    a_hak_tanah: {
      type: DataTypes.STRING(220),
      allowNull: true
    },
    a_sertifikat_tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    a_sertifikat_nomor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    a_penggunaan: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    a_kelurahan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_kecamatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_batas_utara: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_batas_selatan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_batas_barat: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_batas_timur: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_ukur_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    a_ukur_ba: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_ukur_hasil: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_ukur_notes: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_fisik_jenis: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_fisik_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    a_dok_jenis: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_dok_no: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_dok_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    a_dok_notes: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_dok_simpan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_tata_ruang: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_manfaat: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_manfaat_alamat: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_manfaat_sk_no: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    a_manfaat_sk_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    a_manfaat_mulai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    a_manfaat_selesai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    b_merk: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    b_type: {
      type: DataTypes.STRING(1025),
      allowNull: true
    },
    b_cc: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    b_bahan: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    b_nomor_pabrik: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    b_nomor_rangka: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    b_nomor_mesin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_polisi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_bpkb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_ukuran: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    b_warna: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_thbuat: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    c_bertingkat_tidak: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c_beton_tidak: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c_luas_lantai: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    c_lokasi: {
      type: DataTypes.STRING(2024),
      allowNull: true
    },
    c_dokumen_tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    c_dokumen_nomor: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    c_status_tanah: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    c_kode_tanah: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    c_luas_bangunan: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    d_konstruksi: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    d_panjang: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    d_lebar: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    d_luas: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    d_lokasi: {
      type: DataTypes.STRING(2024),
      allowNull: true
    },
    d_dokumen_tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    d_dokumen_nomor: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    d_status_tanah: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    d_kode_tanah: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    e_judul: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_pencipta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_bahan: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    e_spek: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    e_asal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e_ukuran: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    e_jenis: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f_bertingkat_tidak: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    f_beton_tidak: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    f_panjang: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    f_lebar: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    f_luas_lantai: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    f_lokasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    f_dokumen_tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    f_dokumen_nomor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f_status_tanah: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    f_kode_tanah: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    f_luas_bangunan: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2020-02-09 18:50:07.243794"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    update_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    g_jenis_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    g_keterangan1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    g_keterangan2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    g_keterangan3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    perolehan_item_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kib_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departemen_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pemilik_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    b_kd_ruang: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    file_nm: {
      type: DataTypes.JSON,
      allowNull: true
    },
    kondisi_audited_2019: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    koreksi: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    selisih: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    old_kondisi: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    harga_old: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    koma: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dasar_susut: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perolehan: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    max_manfaat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_pemakai: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    b_nip_pemakai: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    b_jabatan_pemakai: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    pemecahan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_bast: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tgl_bast: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    a_manfaat_nilai_sewa: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    b_tanggal_stnk: {
      type: DataTypes.DATE,
      allowNull: true
    },
    manfaat_file_nm: {
      type: DataTypes.JSON,
      allowNull: true
    },
    manfaat_kategori_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    manfaat_status_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    a_sertifikat_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'penetapan',
    schema: 'aset',
    timestamps: false,
    indexes: [
      {
        name: "idx_departemen",
        fields: [
          { name: "kib_id" },
        ]
      },
      {
        name: "idx_departemen_kibs_kategoris_thn_nilai",
        fields: [
          { name: "departemen_id" },
          { name: "kib_id" },
          { name: "kategori_id" },
          { name: "thn_nilai" },
        ]
      },
      {
        name: "idx_departemen_kibs_kategoris_thn_nilai_b_kd_ruang",
        fields: [
          { name: "departemen_id" },
          { name: "kib_id" },
          { name: "kategori_id" },
          { name: "thn_nilai" },
          { name: "b_kd_ruang" },
        ]
      },
      {
        name: "idx_departemen_kibs_kategoris_thn_nilai_b_kd_ruang_harga_perole",
        fields: [
          { name: "departemen_id" },
          { name: "kib_id" },
          { name: "kategori_id" },
          { name: "thn_nilai" },
          { name: "b_kd_ruang" },
          { name: "harga" },
          { name: "perolehan" },
        ]
      },
      {
        name: "idx_kategori",
        fields: [
          { name: "kategori_id" },
        ]
      },
      {
        name: "idx_kib_kondisi_departemen_kibs_kategoris_thn_nilai",
        fields: [
          { name: "kib" },
          { name: "kondisi" },
          { name: "departemen_id" },
          { name: "kib_id" },
          { name: "kategori_id" },
          { name: "thn_nilai" },
        ]
      },
      {
        name: "idx_kibs",
        fields: [
          { name: "kib_id" },
        ]
      },
      {
        name: "idx_kondisi",
        fields: [
          { name: "kondisi" },
        ]
      },
      {
        name: "idx_thn_nilai",
        fields: [
          { name: "thn_nilai" },
        ]
      },
      {
        name: "idx_thn_nilai_kondisi",
        fields: [
          { name: "thn_nilai" },
          { name: "kondisi" },
        ]
      },
      {
        name: "idx_thn_nilai_kondisi_status",
        fields: [
          { name: "thn_nilai" },
          { name: "kondisi" },
          { name: "status" },
        ]
      },
      {
        name: "penetapan_kategori_idx",
        fields: [
          { name: "kategori_id" },
        ]
      },
      {
        name: "penetapan_kib",
        fields: [
          { name: "kib_id" },
        ]
      },
      {
        name: "penetapan_kondisi_idx",
        fields: [
          { name: "kondisi" },
        ]
      },
      {
        name: "penetapan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "penetapan_thn_nilai_idx",
        fields: [
          { name: "thn_nilai" },
        ]
      },
    ]
  });
  }
}
