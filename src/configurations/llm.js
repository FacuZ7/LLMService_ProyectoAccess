import { ChatOpenAI } from "@langchain/openai" 
import * as dotenv from "dotenv";

dotenv.config();

// Instancia el modelo. Temperatura 0 para que sea lo menos creativo posible
// potencialmente podemos modificar este archivo solo para probar otras IA.
const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0.1, //deja volar un toque tu imaginacion
});

export default llm