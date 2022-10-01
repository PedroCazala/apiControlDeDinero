"use strict";
/*conjunto de ingresos y egresos, de determinado sector, ejemplo: El usuario pepe puede tener una sección de ingresos y egresos personales, y otra para su negocio que comparte con su hermano luis, y luis tendrá la personal y la del negocio compartido con su hermano*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceModel = void 0;
const mongoose_1 = require("mongoose");
const balanceCollection = 'balances';
const balanceSchema = new mongoose_1.Schema({
    incomes: { type: mongoose_1.Types.ObjectId, require: true },
    expenses: { type: mongoose_1.Types.ObjectId, require: true }
});
exports.balanceModel = (0, mongoose_1.model)(balanceCollection, balanceSchema);
