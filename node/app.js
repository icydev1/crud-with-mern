require("dotenv").config()
const express = require("express")
const app = express();

require('./DB/conn.js')
const users = require("./models/UserSchema")
const router = require("./routes/route.js")
 const cors = require("cors")

const port = 8003

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,() => {
    console.log(`server is running on ${port}`);
})