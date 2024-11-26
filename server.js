import express from "express";
import dotenv from 'dotenv';
import routes from "./src/routes/postsRoutes.js";

// Carrega as variáveis de ambiente a partir do arquivo .env
dotenv.config();

// Cria uma instância do servidor Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});