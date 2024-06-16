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
    Eres un asistente que responde preguntas basadas en nuestra base de conocimiento.
    Sigue estas reglas estrictamente:
    1. Usa únicamente la información proporcionada en el siguiente contexto:
    {context}
    2. No respondas preguntas sobre temas fuera del contexto proporcionado.
    3. Si la respuesta no se encuentra en el contexto, pide al usuario que "cargue un ticket en Jira" para recibir asistencia de un representante.
    4. Asegúrate de ser claro y conciso en todas tus respuestas.
    5. Mantén un tono profesional y cortés en todo momento.
    `;
};
