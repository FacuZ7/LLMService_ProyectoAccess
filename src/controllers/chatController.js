// import { vectorStore } from '../configurations/pineconeConfiguration.js'
// import createChains from '../utils/createChains.js'
import createAnswer from "../services/createAnswer.js";

export const getAnswer = async (req, res) => {
    try {
        const data = req.body;
        const response = await createAnswer(data.content, data.history)
        res.json(response)
    } catch (error) {
        console.log("Error!")
    }
}

export const getData = (req, res) => {
    const sampleData = { name: 'John', age: 30 };
    res.status(200).send({ message: 'Data retrieved', data: sampleData });
};