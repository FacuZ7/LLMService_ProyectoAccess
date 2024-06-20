import express from "express";
import {
    getAnswer
  } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", getAnswer);

// // Middleware de manejo de errores
// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Error en session.js!");
// });

export default router;