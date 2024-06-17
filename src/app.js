import { vectorStore } from './configurations/pineconeConfiguration.js'
import { createRetrieverPrompt, createSystemPrompt } from "./utils/prompts.js";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import llm from './configurations/llm.js'
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

const retriever = vectorStore.asRetriever()

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
        prompt
    });

    return await createRetrievalChain({
        combineDocsChain: chain,
        retriever: retrieverChain,
    });
};
// todo ok!

const conversationChain = await createChains(retriever)

let result = await conversationChain.invoke({
    input: "¿Cual es la cotización del dolar hoy en argentina?",
});

console.log(result)