"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = 2000;
const server = app.listen(PORT, () => console.log(`Puerto corriendo en http://localhost:${PORT}`));
// Conexión a mongo db
const connectionMongo_1 = require("./src/db/connectionMongo");
(0, connectionMongo_1.connectMongoDb)();
//Rutas
const index_router_1 = require("./src/routes/index.router");
app.use('/', index_router_1.router);
