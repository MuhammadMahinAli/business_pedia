import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from "cors";
import app from "./app.js";


dotenv.config();

import {Sale} from './app/models/Sale.js';
import {Feedback} from './app/models/Feedback.js';
import {Inventory} from './app/models/Inventory.js';
import {StaffPerformance} from './app/models/StaffPerfomance.js';
import {MarketingCampaign} from './app/models/MarketingCampaign.js';
import {RepeatedCustomer} from './app/models/RepeatedCustomer.js';
import {CustomerBehavior }from './app/models/CustomerBehavior.js';

// const app = express();
// app.use(cors());
const port = process.env.PORT || 3000;

export const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🚀 Database connected successfully");
    
    
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}

// Connect to MongoDB


// Body Parser Middleware
app.use(bodyParser.json());

// Route to analyze data

// Endpoint to add sales data
app.post('/addSales', async (req, res) => {
  const { date, totalSales, itemsSold, profit } = req.body;
  try {
    const newSale = new Sale({ date, totalSales, itemsSold, profit });
    await newSale.save();
    res.status(201).json({ message: 'Sale record added successfully!' });
  } catch (error) {
    console.error('Error adding sale record:', error);
    res.status(500).json({ message: 'Failed to add sale record.' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



db();
// const seedData = async () => {
//   await Sale.create([
//     { "date": "2024-05-01", "totalSales": 1200.0, "itemsSold": 110 },
//     { "date": "2024-05-02", "totalSales": 1350.0, "itemsSold": 125 },
//     { "date": "2024-05-03", "totalSales": 980.0, "itemsSold": 90 },
//     { "date": "2024-05-31", "totalSales": 1500.0, "itemsSold": 140 }
//   ]);

//   await Feedback.create([
//     { "date": "2024-05-01", "feedback": "Great service!", "rating": 5 },
//     { "date": "2024-05-02", "feedback": "Food was cold.", "rating": 2 },
//     { "date": "2024-05-03", "feedback": "Loved the pasta.", "rating": 4 },
//     { "date": "2024-05-04", "feedback": "Too noisy.", "rating": 3 },
//     { "date": "2024-05-05", "feedback": "Excellent dessert.", "rating": 5 },
//     { "date": "2024-05-06", "feedback": "Waited too long for a table.", "rating": 2 }
//   ]);

//   await Inventory.create([
//     { "item": "Tomatoes", "quantityAvailable": 30, "lastRestockedDate": "2024-05-29" },
//     { "item": "Cheese", "quantityAvailable": 20, "lastRestockedDate": "2024-05-25" },
//     { "item": "Pasta", "quantityAvailable": 50, "lastRestockedDate": "2024-05-27" }
//   ]);

//   await StaffPerformance.create([
//     { "staffId": "1", "date": "2024-05-01", "performanceScore": 8.5 },
//     { "staffId": "2", "date": "2024-05-01", "performanceScore": 9.0 },
//     { "staffId": "1", "date": "2024-05-02", "performanceScore": 8.0 },
//     { "staffId": "2", "date": "2024-05-02", "performanceScore": 8.5 }
//   ]);

//   await MarketingCampaign.create([
//     { "campaignId": "summer2024", "startDate": "2024-06-01", "endDate": "2024-08-31", "roi": 150 },
//     { "campaignId": "spring2024", "startDate": "2024-03-01", "endDate": "2024-05-31", "roi": 120 }
//   ]);

//   await RepeatedCustomer.create([
//     { "customerId": "123", "visitsCount": 5 },
//     { "customerId": "124", "visitsCount": 3 },
//     { "customerId": "125", "visitsCount": 8 }
//   ]);

//   await CustomerBehavior.create([
//     { "customerId": "123", "date": "2024-05-01", "purchaseBehavior": "Ordered pasta" },
//     { "customerId": "124", "date": "2024-05-02", "purchaseBehavior": "Ordered salad" },
//     { "customerId": "125", "date": "2024-05-03", "purchaseBehavior": "Ordered dessert" }
//   ]);
//   mongoose.connection.close();
// }


// seedData();
