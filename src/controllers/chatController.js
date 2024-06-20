// import { vectorStore } from '../configurations/pineconeConfiguration.js'
// import createChains from '../utils/createChains.js'
import createAnswer from "../services/createAnswer.js";

export const getAnswer = async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        const response = await createAnswer(data.human_message)
        // const conversationChain = await createChains(vectorStore.asRetriever())
        // const response = await conversationChain.invoke({
        //     input: data.answer,
        // });
        //res.json(response)
        console.log(response)
        res.status(201).send({ message: 'Data received', response });
    } catch (error) {
        console.log("Error!")
    }
}

export const getData = (req, res) => {
    const sampleData = { name: 'John', age: 30 };
    res.status(200).send({ message: 'Data retrieved', data: sampleData });
};