import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class partner_departemen extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departemen_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jabatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    struktural_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    mulai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    selesai: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_departemen',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "partner_dept_uq",
        unique: true,
        fields: [
          { name: "partner_id" },
          { name: "departemen_id" },
          { name: "jabatan_id" },
          { name: "mulai" },
        ]
      },
      {
        name: "pk_partner_departemen",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
