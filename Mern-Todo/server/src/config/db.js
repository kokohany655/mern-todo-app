const mongoose = require('mongoose')

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DB_URI).then((con)=>{
        console.log(`Connected to mongoDB ${con.connection.host}`);
    }).catch(err=>{
        console.log(`Error connecting to mongoDB ${err}`);
    })
}