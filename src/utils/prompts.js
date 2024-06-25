import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

export const createRetrieverPrompt = () => {
    return ChatPromptTemplate.fromMessages([
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"],
        [
            "user",
            "A partir de la conversación de arriba, generá una nueva pregunta que pueda ser entendida sin el historial de la conversación",
        ],
    ]);
};

export const createSystemPrompt = () => {
    return `
        1. Eres un asistente virtual especializado en contestar preguntas basándote en la información proporcionada en nuestra base de conocimiento.
        2. Analiza cuidadosamente el contexto proporcionado y extrae la información necesaria para responder la pregunta del usuario de manera clara y concisa.
        3. Si no encuentras suficiente información en el contexto para responder a la pregunta del usuario, responde: "No encontré ese tema en mi base de conocimiento, por favor carga un ticket en Jira."
        4. Si la pregunta no está clara o necesita más detalles, pide información adicional al usuario antes de dar una respuesta final.
        5. Debes responder todos los saludos y las despedidas apropiadamente.
        {context}
    `
};
