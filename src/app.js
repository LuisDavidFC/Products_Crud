const express = require('express')
const app = express()

const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('./config')
const productsRouter = require('./products/products.routers')

db.authenticate()
.then( () => console.log('DB Authentication Succesfully')) 
.catch(console.log)

db.sync()
.then( () => console.log('DB Sync Succesfully'))
.catch(console.log)

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK!'})
})

app.use('/product', productsRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})