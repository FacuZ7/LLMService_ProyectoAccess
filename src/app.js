import { vectorStore } from './configurations/pineconeConfiguration.js'
import createChains from './utils/createChains.js'

const conversationChain = await createChains(vectorStore.asRetriever())

let result = await conversationChain.invoke({
    input: "¿Que me podes decir sobre argentina?",
});

console.log(result)