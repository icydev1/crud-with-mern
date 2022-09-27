const mongoose = require("mongoose")
const db = "mongodb+srv://icy:testingteam@cluster0.phyeqvd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( ()=> console.log('connection Start')
).catch((error) => console.log(error.message))
