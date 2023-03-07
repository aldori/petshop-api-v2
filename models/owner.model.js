import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Owner = db.define(
  "proprietarios",
  {
    proprietarioId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    telefone: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  },
  {
    underscored: true,
  }
);

export default Owner;
