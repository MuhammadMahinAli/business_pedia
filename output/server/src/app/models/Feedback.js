import { Schema, model } from "mongoose";

const FeedbackSchema = new Schema({
    date: String,
    feedback: String,
    rating: Number
});

export const Feedback = model('Feedback', FeedbackSchema);
