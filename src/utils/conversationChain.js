import { retriever } from "../configurations/pineconeConfiguration.js";
import createChains from "./createChains.js";

const conversationChain = await createChains(retriever)

export default conversationChain 