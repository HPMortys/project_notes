const noteRoutes = require('./routes/notes')
const userRoutes = require('./routes/users')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/notes', noteRoutes)
app.use('/user', userRoutes)


const user = process.env.MONGO_USER.replaceAll('"', '')
const password = process.env.MONGO_PASSWORD.replaceAll('"', '')
// const cluster = 

const CONNECTION_URL = `mongodb://${user}:${password}@cluster0-shard-00-00.hpz7s.mongodb.net:27017,cluster0-shard-00-01.hpz7s.mongodb.net:27017,cluster0-shard-00-02.hpz7s.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11r6h6-shard-0&authSource=admin&retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
