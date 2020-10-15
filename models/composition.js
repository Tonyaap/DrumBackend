"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class compositions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      compositions.belongsTo(models.users);
      // define association here
    }
  }
  compositions.init(
    {
      userId: DataTypes.INTEGER,
      compositionName: DataTypes.STRING,
      kick: DataTypes.ARRAY(DataTypes.DECIMAL),
      snare: DataTypes.ARRAY(DataTypes.DECIMAL),
      clap: DataTypes.ARRAY(DataTypes.DECIMAL),
      closedhat: DataTypes.ARRAY(DataTypes.DECIMAL),
      openhat: DataTypes.ARRAY(DataTypes.DECIMAL),
      hitom: DataTypes.ARRAY(DataTypes.DECIMAL),
      lotom: DataTypes.ARRAY(DataTypes.DECIMAL),
      rim: DataTypes.ARRAY(DataTypes.DECIMAL),
      cymbal: DataTypes.ARRAY(DataTypes.DECIMAL),
    },
    {
      sequelize,
      modelName: "compositions",
    }
  );
  return compositions;
};
