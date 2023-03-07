import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animal.model.js";

const Service = db.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
  },
  {
    underscored: true,
  }
);

Service.belongsTo(Animal, { foreignKey: "animalId" });

export default Service;
