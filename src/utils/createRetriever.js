import { index } from "../configurations/pineconeConfiguration.js";
import getEmbedding from "./getEmbedding.js";

/**
 * @param {String} query Recibe la pregunta del usuario en formato texto plano.
 * @return {import("@pinecone-database/pinecone").QueryResponse<import("@pinecone-database/pinecone").RecordMetadata>} Retorna la pregunta del usuario embebida y en forma vectorial.
 */
const createRetriever = async (query) => {
    const queryVector = await getEmbedding(query);
    
    // Define las opciones de búsqueda
    const searchOptions = {
        topK: 3,  // Número de resultados a recuperar
        includeMetadata: true,
    };
    
    // Crea el objeto retriever con un método run
    const retriever = {
        run: async () => {
            // Realiza la búsqueda en el índice
            const searchResults = await index.query({
                vector: queryVector,
                topK: searchOptions.topK,
                includeMetadata: searchOptions.includeMetadata,
            });
            return searchResults;
        }
    };
    
    return retriever;
};

export default createRetriever;