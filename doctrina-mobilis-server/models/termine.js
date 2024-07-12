const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Kurs = require('./kurse');

const Termin = sequelize.define('Termin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  kurs_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kurs,
      key: 'id'
    }
  },
  datum: {
    type: DataTypes.DATE,
    allowNull: false
  },
  uhrzeit: {
    type: DataTypes.TIME,
    allowNull: false
  },
  ort: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'termine',
  timestamps: false
});

Termin.belongsTo(Kurs, { foreignKey: 'kurs_id' });

module.exports = Termin;
