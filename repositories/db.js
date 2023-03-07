import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_URI,
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
