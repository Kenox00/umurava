import { MongoClient } from "mongodb";

// Check for the MongoDB URI in the environment
// If not available, we'll fall back to the static data
const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  console.warn(
    "Warning: MONGODB_URI not found in environment variables. Using static data."
  );
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve the connection
  // during hot reloads
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise && uri) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  
  if (uri) clientPromise = globalWithMongo._mongoClientPromise!;
} else if (uri) {
  // In production, create a new client and connection promise
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a function to get the database
export async function getMongoDb() {
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env"
    );
  }
  
  const client = await clientPromise;
  return client.db("training-portal");
}
