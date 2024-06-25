## Readme para una API Node.js

**Descripción:**

Esta API Node.js Está diseñada para ser fácil de usar y escalable, y se basa en las mejores prácticas de desarrollo de Node.js.


**Características:**

* Guarda el modelo de OpenIa
* Consume Pinecone como fuente de conocimiento
* Expone un endpoint para recibir preguntas

**Requisitos previos:**

* Node.js 16 o superior
* npm o yarn

**Instalación:**

1. Clonee este repositorio: `git clone https://github.com/YOUR_REPOSITORY.git`
2. Instale las dependencias: `npm install` o `yarn install`

**Uso:**

Para iniciar la API, ejecute el siguiente comando:

```
npm start
```

O, para ejecutar la API en modo desarrollo:

```
npm dev
```

La API estará disponible en la siguiente URL:

```
http://localhost:3000
```

**Documentación:**

POST http://localhost:3000/chat/
req.body {
  human_message: '¿Cómo configurar una almacen?'
}

