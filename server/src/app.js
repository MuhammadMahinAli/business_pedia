// import cors from "cors";
// import express from "express";
// import httpStatus from "http-status";
// import axios from "axios";


// import {Sale} from './app/models/Sale.js';
// import {Feedback} from './app/models/Feedback.js';
// import {Inventory} from './app/models/Inventory.js';
// import {StaffPerformance} from './app/models/StaffPerfomance.js';
// import {MarketingCampaign} from './app/models/MarketingCampaign.js';
// import {RepeatedCustomer} from './app/models/RepeatedCustomer.js';
// import {CustomerBehavior }from './app/models/CustomerBehavior.js';



// const app = express();
// //
// app.use(cors());
// const bodyParserLimit = '100mb';
// //parser
// app.use(express.json({limit:bodyParserLimit}));
// app.use(express.urlencoded({extended: true,limit:bodyParserLimit}));

// ////use route
// //app.use("/api/v1", router); 

// const apiKey = process.env.OPENAI_API_KEY ||"sk-proj-mOdDyyQQq6GBxkH5vbaNT3BlbkFJxR7N09AHu6KnHqUwNV27";




// app.get("/", (req, res) => {
//   res.send("Server is Listening..");
// });

// app.post('/analyze', async (req, res) => {
//   try {
//     const salesData = await Sale.find({});
//     const feedbackData = await Feedback.find({});
//     const inventoryData = await Inventory.find({});
//     const staffPerformanceData = await StaffPerformance.find({});
//     const marketingCampaignData = await MarketingCampaign.find({});
//     const repeatedCustomerData = await RepeatedCustomer.find({});
//     const customerBehaviorData = await CustomerBehavior.find({});

//     // const prompt = `
//     //   Analyze the following data and suggest improvements:
//     //   Sales Data: ${JSON.stringify(salesData)}
//     //   Feedback Data: ${JSON.stringify(feedbackData)}
//     //   Inventory Data: ${JSON.stringify(inventoryData)}
//     //   Staff Performance Data: ${JSON.stringify(staffPerformanceData)}
//     //   Marketing Campaign Data: ${JSON.stringify(marketingCampaignData)}
//     //   Repeated Customer Data: ${JSON.stringify(repeatedCustomerData)}
//     //   Customer Behavior Data: ${JSON.stringify(customerBehaviorData)}
//     // `;

//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//        model: "gpt-3.5-turbo",
//        prompt: `
//        Analyze the following data and suggest improvements:
//        Sales Data: [
//          {"_id":"66647e622f3496e10555435b","date":"2024-05-03","totalSales":980,"itemsSold":90,"__v":0},
//          {"_id":"66647e622f3496e10555435c","date":"2024-05-31","totalSales":1500,"itemsSold":140,"__v":0},
//          {"_id":"66647e622f3496e105554359","date":"2024-05-01","totalSales":1200,"itemsSold":110,"__v":0},
//          {"_id":"66647e622f3496e10555435a","date":"2024-05-02","totalSales":1350,"itemsSold":125,"__v":0},
//          // Add the rest of your data here...
//        ]
//        Feedback Data: [
//          {"_id":"66647e642f3496e105554369","date":"2024-05-05","feedback":"Excellent dessert.","rating":5,"__v":0},
//          {"_id":"66647e642f3496e105554366","date":"2024-05-02","feedback":"Food was cold.","rating":2,"__v":0},
//          {"_id":"66647e642f3496e105554368","date":"2024-05-04","feedback":"Too noisy.","rating":3,"__v":0},
//          {"_id":"66647e642f3496e105554365","date":"2024-05-01","feedback":"Great service!","rating":5,"__v":0},
//          // Add the rest of your data here...
//        ]`,
//       max_tokens: 150
//     }, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`
//       }
//     });

//     res.json({ suggestions: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//     res.status(500).send('An error occurred while analyzing data.');
//   }
// });


// app.use((req, res, next) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not found",
//     errorMessgaes: [{path: req.originalUrl, message: "Api not found"}],
//   });

// });
// export default app;
///////////////////////////////////////////////////////////////////////////
// import cors from "cors";
// import express from "express";
// import httpStatus from "http-status";
// import axios from "axios";

// const app = express();
// app.use(cors());
// const bodyParserLimit = '100mb';
// app.use(express.json({ limit: bodyParserLimit }));
// app.use(express.urlencoded({ extended: true, limit: bodyParserLimit }));

// const apiKey = process.env.OPENAI_API_KEY || "sk-proj-mOdDyyQQq6GBxkH5vbaNT3BlbkFJxR7N09AHu6KnHqUwNV27";

// app.get("/", (req, res) => {
//   res.send("Server is Listening..");
// });

// app.post('/analyze', async (req, res) => {
//   try {
//     // Using static data for simplicity
//     const salesData = [
//       {"_id":"66647e622f3496e10555435b","date":"2024-05-03","totalSales":980,"itemsSold":90},
//       {"_id":"66647e622f3496e10555435c","date":"2024-05-31","totalSales":1500,"itemsSold":140},
//       // Add more static data...
//     ];
//     const feedbackData = [
//       {"_id":"66647e642f3496e105554369","date":"2024-05-05","feedback":"Excellent dessert.","rating":5},
//       {"_id":"66647e642f3496e105554366","date":"2024-05-02","feedback":"Food was cold.","rating":2},
//       // Add more static data...
//     ];
//     // Add static data for other collections...

//     const prompt = `
//       Analyze the following data and suggest improvements:
//       Sales Data: ${JSON.stringify(salesData, null, 2)}
//       Feedback Data: ${JSON.stringify(feedbackData, null, 2)}
//       // Add other data as needed...
//     `;

//     console.log('Prompt sent to OpenAI:', prompt);

//     const response = await axios.post('https://api.openai.com/v1/completions', {
//       model: "gpt-3.5-turbo",
//       prompt: prompt,
//       max_tokens: 150
//     }, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     console.log('Response from OpenAI:', response.data);

//     res.json({ suggestions: response.data.choices[0].text });
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//     if (error.response) {
//       console.error('Status:', error.response.status);
//       console.error('Headers:', JSON.stringify(error.response.headers, null, 2));
//       console.error('Data:', error.response.data);
//     } else if (error.request) {
//       console.error('Request:', error.request);
//     }
//     res.status(500).json({ message: 'An error occurred while analyzing data.', error: error.message });
//   }
// });

// app.use((req, res, next) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not found",
//     errorMessages: [{ path: req.originalUrl, message: "API not found" }],
//   });
// });

// export default app;

import cors from "cors";
import express from "express";
import httpStatus from "http-status";
import axios from "axios";

const app = express();
app.use(cors());
const bodyParserLimit = '100mb';
app.use(express.json({ limit: bodyParserLimit }));
app.use(express.urlencoded({ extended: true, limit: bodyParserLimit }));

const apiKey = process.env.OPENAI_API_KEY || "sk-proj-mOdDyyQQq6GBxkH5vbaNT3BlbkFJxR7N09AHu6KnHqUwNV27";

app.get("/", (req, res) => {
  res.send("Server is Listening..");
});

app.post('/analyze', async (req, res) => {
  try {
    console.log('Received request to /analyze endpoint');

    // Using static data for simplicity
    const salesData = [
      {"_id":"66647e622f3496e10555435b","date":"2024-05-03","totalSales":980,"itemsSold":90},
      {"_id":"66647e622f3496e10555435c","date":"2024-05-31","totalSales":1500,"itemsSold":140},
      // Add more static data...
    ];
    const feedbackData = [
      {"_id":"66647e642f3496e105554369","date":"2024-05-05","feedback":"Excellent dessert.","rating":5},
      {"_id":"66647e642f3496e105554366","date":"2024-05-02","feedback":"Food was cold.","rating":2},
      // Add more static data...
    ];
    // Add static data for other collections...

    const prompt = `
      Analyze the following data and suggest improvements:
      Sales Data: ${JSON.stringify(salesData, null, 2)}
      Feedback Data: ${JSON.stringify(feedbackData, null, 2)}
      // Add other data as needed...
    `;

    console.log('Prompt sent to OpenAI:', prompt);

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert data analyst." },
        { role: "user", content: prompt }
      ],
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Response from OpenAI:', response.data);

    res.json({ suggestions: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Headers:', JSON.stringify(error.response.headers, null, 2));
      console.error('Data:', error.response.data);
    } else if (error.request) {
      console.error('Request:', error.request);
    }
    res.status(500).json({ message: 'An error occurred while analyzing data.', error: error.message });
  }
});

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [{ path: req.originalUrl, message: "API not found" }],
  });
});

export default app;