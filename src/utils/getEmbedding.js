import { myEmbedding } from "../configurations/embeddingsConfiguration.js";

const getEmbedding = async (query) => {
    console.log(1)
    const embedding = await myEmbedding.embedQuery(query)
    return embedding

}

export default getEmbedding;