import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kelurahan extends Model {
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
    kecamatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kelurahan',
    schema: 'aset_manfaat',
    timestamps: false,
    indexes: [
      {
        name: "kelurahan_kode_uq",
        unique: true,
        fields: [
          { name: "kode" },
          { name: "kecamatan_id" },
        ]
      },
      {
        name: "pk_kelurahan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
