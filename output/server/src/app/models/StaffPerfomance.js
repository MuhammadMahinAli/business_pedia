import { Schema, model } from "mongoose";

const StaffPerformanceSchema = new Schema({
    staffId: String,
    date: String,
    performanceScore: Number
});


export const StaffPerformance = model('StaffPerformance', StaffPerformanceSchema);