import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Wine = sequelize.define('Wine', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING }
});

export { Wine }