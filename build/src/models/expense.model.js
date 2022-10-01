"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const expenseCollection = 'expenses';
const expenseSchema = new mongoose_1.Schema({
    day: { type: Number, require: true, min: 1, max: 31 },
    month: { type: Number, require: true, min: 1, max: 12 },
    year: { type: Number, require: true },
    amount: { type: Number, require: true },
    description: { type: String },
    tickets: { type: String } //las img de las boletas
});
const expenseModel = (0, mongoose_1.model)(expenseCollection, expenseSchema);
