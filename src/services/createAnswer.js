import conversationChain from "../utils/conversationChain.js";

const createAnswer = async (input) => {
    return await conversationChain.invoke({
        input
    });
}

export default createAnswer;