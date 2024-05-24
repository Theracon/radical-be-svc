"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
const User_1 = __importDefault(require("./User"));
class Favourite extends sequelize_1.Model {
}
Favourite.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    modelName: 'Favourite'
});
Favourite.belongsTo(User_1.default);
User_1.default.hasMany(Favourite);
Favourite.sync();
exports.default = Favourite;
