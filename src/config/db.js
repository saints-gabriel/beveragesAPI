import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password,
    {
  host: process.env.db_host,
  port: process.env.db_port,
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true
  }
});

export default sequelize;