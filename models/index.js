/**
 * アンケート結果保存用 Model
 */

var Sequelize = require("sequelize");

// connect sqlite
var sequelize = new Sequelize(null, null, null, {
  logging: true,
  dialect: "sqlite",
  storage: "data.db",
  define: {
    freezeTableName: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: false
  }
});

// define schema
var Results = sequelize.define("results", {
  times: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false
  },
  want_next: {
    type: Sequelize.ENUM,
    values: ["yes", "no"],
    allowNull: false
  },
  language: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  total_satisfaction: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5],
    allowNull: false
  },
  venue_satisfaction: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5],
    allowNull: false,
  },
  working_hours: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5],
    allowNull: false,
  },
  work_satisfaction: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5],
    allowNull: false
  }
});

// data.db に書き込み
Results.sync();

// define model
var models = module.exports = {};

models.results = {};
models.results.add = function (result, callback) {
  Results.create(result).success(function (result) {
    callback && callback(null, result);
  }).error(function (err) {
    callback && callback(err);
  });
};
models.results.get = function (callback) {
  Results.findAll().success(function (results) {
    results = results.map(function (result) {
      return result.dataValues;
    });
    callback && callback(null, results);
  }).error(function (err) {
    callback && callback(err);
  });
};
