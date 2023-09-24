import express from "express";
import { PORT } from "./config.js";
import tasksRoutes from "./routes/tasks.routes.js";


const app = express();

app.use(express.json());

app.use(tasksRoutes);

app.listen(PORT);
console.log(`Servidor en el puerto ${PORT}`);
