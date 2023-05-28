import mongoose from "mongoose";

export default async function dbConn() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongoose connected!"))
    .catch((error) => console.log(error.message));
}
