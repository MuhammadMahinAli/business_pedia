import { Schema, model } from "mongoose";

const RepeatedCustomerSchema = new Schema({
    customerId: String,
    visitsCount: Number
});

export const RepeatedCustomer = model('RepeatedCustomer', RepeatedCustomerSchema);
