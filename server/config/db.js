import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return client; // Return the client so it can be used elsewhere
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err; // Re-throw the error for handling elsewhere
  }
}

export { client, connectDB };
