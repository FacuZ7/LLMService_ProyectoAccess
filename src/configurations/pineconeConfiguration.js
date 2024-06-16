import { Pinecone } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";
dotenv.config();


const pineconeClient = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
});

const index = pineconeClient.Index(process.env.PINECONE_INDEX_NAME);

export { pineconeClient, index };
