const mongoose=require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectDB() {
    try {
        if(NODE_ENV == "dev"){
            await mongoose.connect(ATLAS_DB_URL);
        }
        
    } catch (error) {
        console.log("Something went wrong ");
        console.log(error);
    }
}

module.exports=connectDB;