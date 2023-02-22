// import { MongoClient } from "mongodb";
 
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://sunil1:sunilreddy1@cluster0.qua6s9m.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("connected");
  return client;
}

// import { MongoClient } from "mongodb";

// export async function connectTODatabase() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://sunil:sunil@cluster0.8kqs9ps.mongodb.net/?retryWrites=true&w=majority"
//   );
//   return client;
// }
