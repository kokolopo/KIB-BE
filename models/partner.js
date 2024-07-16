import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class partner extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alamat_1: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    alamat_2: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kelurahan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kecamatan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    provinsi: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    is_vendor: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    is_customer: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    bank_accnt: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    pic_mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    pic_email: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    pic_jabatan: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departemen_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rt: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    rw: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tempat_lahir: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    tgl_lahir: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gol_darah: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    agama: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    perkawinan: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pekerjaan: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    kewarganegaraan: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "partner_kode_uq",
        unique: true,
        fields: [
          { name: "kode" },
        ]
      },
      {
        name: "pk_partner",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
