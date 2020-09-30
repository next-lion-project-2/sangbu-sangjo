const express = require('express')
const bodyParser = require('body-parser')
const tempRouter = require('./routes/temp')
const connectToDatabase = require('./loaders/dbConnect')
const config = require('./config')
const port = config.port
const startServer = async () => {
    const app = express()
    
    app.use(bodyParser.urlencoded({
        extended: true
      }));
    app.use( bodyParser.json() );
    app.use(express.json())

    // db connection
    connectToDatabase()

    app.use(tempRouter)
    app.listen(port, (err) => {
        if(err) {
            res.send(err) 
        }
        console.log(`Server is up on port ${port}!`)
    })
}

startServer()