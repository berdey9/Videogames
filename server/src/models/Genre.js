const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allownull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { freezeTableName: true, timestamps: false }
  );
};
