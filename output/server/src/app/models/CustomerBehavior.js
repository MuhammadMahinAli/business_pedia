// import mongoose from 'mongoose';

// const CustomerBehaviorSchema = new mongoose.Schema({
//     customerId: String,
//     date: String,
//     purchaseBehavior: String
// });

// module.exports = mongoose.model('CustomerBehavior', CustomerBehaviorSchema);
import { Schema, model } from "mongoose";

const CustomerBehaviorSchema = new Schema({
    customerId: String,
         date: String,
         purchaseBehavior: String
});

export const CustomerBehavior = model("CustomerBehavior", CustomerBehaviorSchema);
