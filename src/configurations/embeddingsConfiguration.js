import { OpenAIEmbeddings } from "@langchain/openai";


export const myEmbedding = new OpenAIEmbeddings({
    model:'text-embedding-ada-002'
});
