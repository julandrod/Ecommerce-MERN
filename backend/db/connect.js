import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connection Successfully!"))
    .catch((error) => console.log(error));
};

export default connectDB;
