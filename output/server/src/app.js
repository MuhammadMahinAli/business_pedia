import cors from "cors";
import express from "express";
import httpStatus from "http-status";
import axios from "axios";

const app = express();
app.use(cors());
const bodyParserLimit = "100mb";
app.use(express.json({ limit: bodyParserLimit }));
app.use(express.urlencoded({ extended: true, limit: bodyParserLimit }));

const apiKey =
  process.env.OPENAI_API_KEY ||
  "sk-proj-mOdDyyQQq6GBxkH5vbaNT3BlbkFJxR7N09AHu6KnHqUwNV27";

app.get("/", (req, res) => {
  res.send("Server is Listening..");
});

app.post("/analyze", async (req, res) => {
  try {
    console.log("Received request to /analyze endpoint");

    // Using static data for simplicity
    const salesData = [
      {
        _id: "66647e622f3496e10555435b",
        date: "2024-05-01",
        totalSales: 1200,
        itemsSold: 110,
      },
      {
        _id: "66647e622f3496e10555435c",
        date: "2024-05-02",
        totalSales: 1350,
        itemsSold: 125,
      },
      {
        _id: "66647e622f3496e10555435d",
        date: "2024-05-03",
        totalSales: 980,
        itemsSold: 90,
      },
      {
        _id: "66647e622f3496e10555435e",
        date: "2024-05-04",
        totalSales: 1600,
        itemsSold: 145,
      },
      {
        _id: "66647e622f3496e10555435f",
        date: "2024-05-05",
        totalSales: 1450,
        itemsSold: 130,
      },
      {
        _id: "66647e622f3496e105554360",
        date: "2024-05-06",
        totalSales: 1250,
        itemsSold: 115,
      },
      {
        _id: "66647e622f3496e105554361",
        date: "2024-05-07",
        totalSales: 1750,
        itemsSold: 160,
      },
      {
        _id: "66647e622f3496e105554362",
        date: "2024-05-08",
        totalSales: 1650,
        itemsSold: 155,
      },
      {
        _id: "66647e622f3496e105554363",
        date: "2024-05-09",
        totalSales: 1500,
        itemsSold: 140,
      },
      {
        _id: "66647e622f3496e105554364",
        date: "2024-05-10",
        totalSales: 1400,
        itemsSold: 130,
      },
    ];

    const feedbackData = [
      {
        _id: "66647e642f3496e105554365",
        date: "2024-05-01",
        feedback: "Great service!",
        rating: 5,
      },
      {
        _id: "66647e642f3496e105554366",
        date: "2024-05-02",
        feedback: "Food was cold.",
        rating: 2,
      },
      {
        _id: "66647e642f3496e105554367",
        date: "2024-05-03",
        feedback: "Loved the pasta.",
        rating: 4,
      },
      {
        _id: "66647e642f3496e105554368",
        date: "2024-05-04",
        feedback: "Too noisy.",
        rating: 3,
      },
      {
        _id: "66647e642f3496e105554369",
        date: "2024-05-05",
        feedback: "Excellent dessert.",
        rating: 5,
      },
      {
        _id: "66647e642f3496e10555436a",
        date: "2024-05-06",
        feedback: "Waited too long for a table.",
        rating: 2,
      },
      {
        _id: "66647e642f3496e10555436b",
        date: "2024-05-07",
        feedback: "Great ambiance.",
        rating: 5,
      },
      {
        _id: "66647e642f3496e10555436c",
        date: "2024-05-08",
        feedback: "Food was bland.",
        rating: 3,
      },
      {
        _id: "66647e642f3496e10555436d",
        date: "2024-05-09",
        feedback: "Loved the drinks.",
        rating: 4,
      },
      {
        _id: "66647e642f3496e10555436e",
        date: "2024-05-10",
        feedback: "Service was slow.",
        rating: 2,
      },
      {
        _id: "66647e642f3496e10555436f",
        date: "2024-05-11",
        feedback: "Great dessert selection.",
        rating: 5,
      },
    ];
    // Add static data for other collections...

    const prompt = `
      Analyze the following data and suggest improvements:
      Sales Data: ${JSON.stringify(salesData, null, 2)}
      Feedback Data: ${JSON.stringify(feedbackData, null, 2)}
      // Add other data as needed...
    `;

    console.log("Prompt sent to OpenAI:", prompt);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are an expert data analyst." },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response from OpenAI:", response.data);

    res.json({ suggestions: response.data.choices[0].message.content });
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error(
        "Headers:",
        JSON.stringify(error.response.headers, null, 2)
      );
      console.error("Data:", error.response.data);
    } else if (error.request) {
      console.error("Request:", error.request);
    }
    res
      .status(500)
      .json({
        message: "An error occurred while analyzing data.",
        error: error.message,
      });
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
