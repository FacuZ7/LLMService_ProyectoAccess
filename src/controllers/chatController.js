import generateAnswer from "../services/openaiService.js";

//req traido de facu's

const getAiResponse = async (req, res) => {
    try {

        const response = await generateAnswer(req.body.content);
        res.json(response)

    } catch (error) {
        console.log("Error!")
    }
  
}

export { getAiResponse }