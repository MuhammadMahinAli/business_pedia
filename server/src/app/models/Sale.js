// const mongoose = require('mongoose');

// const SaleSchema = new mongoose.Schema({
//     date: String,
//     totalSales: Number,
//     itemsSold: Number
// });

// module.exports = mongoose.model('Sale', SaleSchema);
import { Schema, model } from "mongoose";

const SaleSchema = new Schema({ 
    date: String,
         totalSales: Number,
         itemsSold: Number,
})


export const Sale = model("Sale", SaleSchema);
