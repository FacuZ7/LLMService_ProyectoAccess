import { index } from "../configurations/pineconeConfiguration.js";

/**
 * @param {String} query Recibe la pregunta del usuario en formato texto plano.
 * @return {import("@pinecone-database/pinecone").QueryResponse<import("@pinecone-database/pinecone").RecordMetadata>} Retorna la pregunta del usuario embebida y en forma vectorial.
 */
const createRetriever = async (query) => {
    console.log(0)
    const queryVector = await getEmbedding(query)
    console.log(2)
    console.log(queryVector)
    // Define las opciones de búsqueda
    const searchOptions = {
        topK: 3,  // Número de resultados a recuperar
        includeMetadata: true,
    };
    console.log(3)
    
    // Realiza la búsqueda en el índice
    const searchResults = await index.query({
        vector: queryVector,
        topK: searchOptions.topK,
        includeMetadata: searchOptions.includeMetadata,
    });
    console.log(4)
    return searchResults;
}

export default createRetriever;