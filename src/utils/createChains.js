import llm from '../configurations/llm.js';
import { createRetrieverPrompt, createSystemPrompt } from './prompts.js'
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

const createChains = async (retriever) => {
    const retrieverPrompt = createRetrieverPrompt();
    
    const retrieverChain = await createHistoryAwareRetriever({
        llm,
        retriever,
        rephrasePrompt: retrieverPrompt,
    });

    const system_prompt = createSystemPrompt();

    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system",
            system_prompt,
        ],
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"],
    ]);

    const chain = await createStuffDocumentsChain({
        llm,
        prompt,
    });

    return await createRetrievalChain({
        combineDocsChain: chain,
        retriever: retrieverChain,
    });

}

export default createChains;