"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userCollection = 'users';
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, require: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dateBird: { type: String },
    img: { type: String }
});
const userModel = (0, mongoose_1.model)(userCollection, userSchema);
