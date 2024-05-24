import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../config/db'
import User from './User'

class Favourite extends Model {}

Favourite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'Favourite'
  }
)

Favourite.belongsTo(User)
User.hasMany(Favourite)

Favourite.sync()

export default Favourite
