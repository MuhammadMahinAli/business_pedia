import { Schema, model } from "mongoose";

const InventorySchema = new Schema({
    item: String,
    quantityAvailable: Number,
    lastRestockedDate: String
});

export const Inventory = model('Inventory', InventorySchema);
