import { myEmbeddingTechnique } from "../configurations/embeddingsConfiguration.js";

const getEmbedding = async (query) => {
    console.log(1)
    const embedding = await myEmbeddingTechnique.embedQuery(query)
    return embedding

}

export default getEmbedding;