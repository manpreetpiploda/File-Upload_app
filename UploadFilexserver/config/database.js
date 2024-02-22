const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connectedddd"))
    .catch( (error) => {
        console.log("DB connection Issue");
        console.error(error);
        process.exit(1);
    })
};

// module.exports =                        