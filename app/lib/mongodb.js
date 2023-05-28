// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let client;
let clientPromise;

try {
  client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
} catch (error) {
  throw new Error("Something went Wrong");
}

export default clientPromise;
