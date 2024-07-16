import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class satuan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(62),
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
    }
  }, {
    sequelize,
    tableName: 'satuan',
    schema: 'aset',
    timestamps: false,
    indexes: [
      {
        name: "satuan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
