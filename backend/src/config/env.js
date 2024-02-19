require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8080,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER || '',
  db_pass: process.env.DB_PASS,
  db_name: process.env.DB_NAME,
  db_dialect: process.env.DB_DIALECT
}
