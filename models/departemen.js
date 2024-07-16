import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class departemen extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    singkat: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    level_id: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.STRING(16),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'departemen',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dep_kode_idx",
        fields: [
          { name: "kode" },
        ]
      },
      {
        name: "idx_kode",
        fields: [
          { name: "id" },
          { name: "kode" },
        ]
      },
      {
        name: "pk_departemen",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "trgm_dep_kode_idx",
        fields: [
          { name: "kode" },
        ]
      },
    ]
  });
  }
}
