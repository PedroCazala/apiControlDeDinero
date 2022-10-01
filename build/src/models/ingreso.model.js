"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const incomeCollection = 'income';
const incomeSchema = new mongoose_1.Schema({
    day: { Number, require: true, min: 1, max: 31 },
    month: { Number, require: true, min: 1, max: 12 },
    year: { Number, require: true },
    amount: { Number, require: true },
    source: { String },
    shift: { String },
    description: { String }
});
const incomeModel = (0, mongoose_1.model)(incomeCollection, incomeSchema);
