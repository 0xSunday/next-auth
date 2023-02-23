import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://sunil1:sunilreddy@cluster0.qua6s9m.mongodb.net/?retryWrites=true&w=majority"
  );

 
  return client;
}
