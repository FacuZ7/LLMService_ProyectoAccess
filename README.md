## Readme LLMService_ProyectoAccess

**Descripción:**

Este repositorio se ocupa de crear y configurar el modelo (LLM) para procesar preguntas y generar respuestas. Tambien expone un endpoint por el cual recibe preguntas y envia respuestas.

**Requisitos previos:**

* Node.js 16 o superior
* npm o yarn

**Instalación:**

1. Clone este repositorio: `git clone https://github.com/FacuZ7/LLMService_ProyectoAccess.git`
2. Instale las dependencias: `npm install` o `yarn install`

**Uso:**

Completar las key con los datos correspondientes:

. PINECONE_API_KEY = api key proporcionada una vez que se crea cuenta en pinecone.\
. PINECONE_INDEX_NAME = este nombre es a elección. (Debe coincidir con el configurado en el [GestorVectorial](https://github.com/FacuZ7/GestorVectorial_ProyectoAccess))\
. OPENAI_API_KEY = para esto debemos registrarnos en OPENAI y crear una api key. 

ejecute el siguiente comando:

```
npm start
```

El Servicio va a estar levantado y esperando peticiones en el endpoint /chat
