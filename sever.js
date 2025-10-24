import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Configurando __dirname no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor Iniciado!"));
