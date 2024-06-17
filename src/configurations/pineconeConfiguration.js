import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { myEmbeddingTechnique } from "./embeddingsConfiguration.js";
import * as dotenv from "dotenv";
dotenv.config();


const pineconeClient = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
});

const pineconeIndex = pineconeClient.Index(process.env.PINECONE_INDEX_NAME);

const vectorStore = new PineconeStore(myEmbeddingTechnique,{
    pineconeIndex
})

export { pineconeClient, pineconeIndex, vectorStore };
