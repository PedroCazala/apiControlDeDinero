"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeModel = void 0;
const mongoose_1 = require("mongoose");
const incomeCollection = 'incomes';
const incomeSchema = new mongoose_1.Schema({
    day: { type: Number, require: true, min: 1, max: 31 },
    month: { type: Number, require: true, min: 1, max: 12 },
    year: { type: Number, require: true },
    amount: { type: Number, require: true },
    source: { type: String },
    shift: { type: String },
    description: { type: String }
});
exports.incomeModel = (0, mongoose_1.model)(incomeCollection, incomeSchema);
