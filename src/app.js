import createChains from "./utils/createChains.js";
import createRetriever from "./utils/createRetriever.js";


const retriever = await createRetriever("¿Como configurar un almacén?");
const conversationChain = await createChains(retriever);

conversationChain.invoke() //y ahora?
