'use strict';
module.exports = (sequelize, DataTypes) => {
  const Níveis = sequelize.define('Níveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Níveis.associate = function(models) {
    // associations can be defined here
  };
  return Níveis;
};