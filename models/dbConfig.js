const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/exo-api",
    { useNewUrlParser : true, useUnifiedTopology : true},
    (err)=>{
        if(!err) console.log("Connected");
        else console.log("Connection error:" + err);
    }

)
