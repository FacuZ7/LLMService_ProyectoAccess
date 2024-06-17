import { vectorStore } from '../configurations/pineconeConfiguration.js'
import createChains from '../utils/createChains.js'

export const createAnswer = async (req, res) => {
    console.log('-------------', req);
    const data = req.body;

    try {
        const conversationChain = await createChains(vectorStore.asRetriever())
        const response = await conversationChain.invoke({
            input: data.answer,
        });
        //res.json(response)
        res.status(201).send({ message: 'Data received', receivedData: response });
    } catch (error) {
        console.log("Error!")
    }
}

export const getData = (req, res) => {
    const sampleData = { name: 'John', age: 30 };
    res.status(200).send({ message: 'Data retrieved', data: sampleData });
};