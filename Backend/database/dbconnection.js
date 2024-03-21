import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTURANT"
    }).then(()=> {
        console.log("connected to db sucessfully");
    }).catch((err)=> {
        console.log(`Some error occured while connecting to db ${err}`);
    })
}