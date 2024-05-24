import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../config/db'

class User extends Model {
  password!: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'User'
  }
)

User.sync()

export default User
