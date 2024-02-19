const { Sequelize } = require('sequelize')
const env = require('./env.js')

const sequelize = new Sequelize(env.db_name, env.db_user, env.db_pass, {
  host: env.db_host,
  dialect: env.db_dialect,
  logging: false
})

module.exports = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
