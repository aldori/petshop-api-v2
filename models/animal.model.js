import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Owner from "./owner.model.js";

const Animal = db.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    tipo: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  },
  {
    underscored: true,
  }
);

Animal.belongsTo(Owner, { foreignKey: "proprietarioId" });

export default Animal;
