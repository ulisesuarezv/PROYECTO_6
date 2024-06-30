const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Se ha conectado a MONGO");
    } catch (error) {
        console.log("No se ha conectado a MONGO");
    }
}

module.exports = { connectDB }