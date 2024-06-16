import { myEmbeddingTechnique } from "../configurations/embeddingsConfiguration.js";

const getEmbedding = async (query) => {
    const embedding = await myEmbeddingTechnique.embedQuery(query)
    return embedding
}

export default getEmbedding;