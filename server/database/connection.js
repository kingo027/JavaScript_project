// Student Name: Harsh Patel
// C number: c0835400

const mongoose = require("mongoose");
// MongoDB coonection esteblished here
const connectDB = async () => {
    try{
        // mongodb connection string
        mongoose.set("strictQuery", true);
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB