const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

//database string
const connectionDB = async () => {
    try {

        await mongoose.connect(DATABASE_URL);
        console.log('Database connected successfully',mongoose.connection.readyState);

    } catch (error) {
        console.log('Database connection failed:', mongoose.connection.readyState );
        console.log(error.message);

    }

}
//Call the function for connection 
connectionDB()
//export a connection
module.exports = connectionDB