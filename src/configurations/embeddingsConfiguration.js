import { OpenAIEmbeddings } from "@langchain/openai";


export const myEmbeddingTechnique = new OpenAIEmbeddings({
    model:'text-embedding-ada-002'
});
