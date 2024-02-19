const express = require('express')
const cors = require('cors')

const env = require('./config/env.js')
const connectDB = require('./config/sql.js')
const db = require('./models')

const router = require('./routes')

const start = () => {
  const app = express()
  const port = env.port

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())

  app.use('/api/v1', router)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

;(async () => {
  try {
    await connectDB()
    await db.sequelize.sync()

    start()
  } catch (err) {
    console.error(err)
    process.exit(0)
  }
})()
