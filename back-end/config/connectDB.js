const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

//database string
const connectionDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Database connected successfully', mongoose.connection.readyState);
    } catch (error) {
        console.log('Database connection failed:', mongoose.connection.readyState);
        console.log(error.message);
    }
}

// (async () => {

//     try {

//         let status = await connectionDB()

//         if (!status) {
//             console.log("Retrying once...")

//             await new Promise((res) => setTimeout(res, 4000))

//             status = await connectionDB()
//         }

//         if (status) {
//             console.log("Retry successfull database connected..")
//         } else {
//             console.log("Retry failed..")
//         }

//     } catch (error) {
//         console.log('Database connection failed:', mongoose.connection.readyState);
//         console.log(error.message);
//     }


// }

// )();

connectionDB()

//export a connection
module.exports = connectionDB