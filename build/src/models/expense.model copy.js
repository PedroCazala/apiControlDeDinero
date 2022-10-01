"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const expenseCollection = 'expense';
const expenseSchema = new mongoose_1.Schema({
    day: { Number, require: true, min: 1, max: 31 },
    month: { Number, require: true, min: 1, max: 12 },
    year: { Number, require: true },
    amount: { Number, require: true },
    description: { String },
    tickets: { String } //las img de las boletas
});
const expenseModel = (0, mongoose_1.model)(expenseCollection, expenseSchema);
