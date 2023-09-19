import mongoose from "mongoose"

const connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    }
    catch(err)
    {
        console.log("failed to connect to the DATABASE",err);
    }
}
export default connection;