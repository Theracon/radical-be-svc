import { Sequelize } from 'sequelize'

require('dotenv').config({ path: require('find-config')('.env') })

const sequelize = new Sequelize(process.env.POSTGRES_URI!)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  return null
}

export { connectToDatabase, sequelize }
