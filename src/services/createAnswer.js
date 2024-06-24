import conversationChain from "../utils/conversationChain.js";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

const createAnswer = async (input, history) => {

    let previousMessages = history.map(item => {
        return item.role === "human" ? new HumanMessage(item.content) : new AIMessage(item.content)
      })

    return await conversationChain.invoke({
        chat_history: previousMessages,
        input
    });
}

export default createAnswer;