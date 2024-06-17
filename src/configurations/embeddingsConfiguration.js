import { OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from 'dotenv'
dotenv.config()

export const myEmbeddingTechnique = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    model:'text-embedding-ada-002'
});
