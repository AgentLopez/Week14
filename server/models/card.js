'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Card.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    choice: DataTypes.STRING,
    comments: DataTypes.STRING,
    file: DataTypes.STRING,
    shipped: DataTypes.BOOLEAN,
    tracknum: DataTypes.STRING,
    shipdate: DataTypes.STRING,
    paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};