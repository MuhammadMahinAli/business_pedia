import cors from "cors";
import express from "express";
import httpStatus from "http-status";
import axios from "axios";

const app = express();
app.use(cors());
const bodyParserLimit = "1000mb";
app.use(express.json({ limit: bodyParserLimit }));
app.use(express.urlencoded({ extended: true, limit: bodyParserLimit }));

const apiKey = process.env.OPENAI_API_KEY

app.get("/", (req, res) => {
  res.send("Server is Listening.");
});
app.get("/test", (req, res) => {
  res.send("Test 1 is working ..");
});
app.get("/test2", (req, res) => {
  res.send("Test 2 is working ..");
});

app.post("/analyze", async (req, res) => {
  try {
    console.log("Received request to /analyze endpoint");
    const { query } = req.body;
    const relevantKeywords = [
      "data",
      "improve",
      "business",
      "result",
      "analyze",
      "feedback",
      "sales",
      "inventory",
      "performance",
      "marketing",
      "campaign",
      "customer",
      "behavior",
      "suggestions",
      "optimization",
      "efficiency",
      "metrics",
      "growth",
      "strategy",
      "analytics",
      "trend",
      "insight",
      "evaluation",
      "revenue",
      "profit",
      "cost",
      "engagement",
      "satisfaction",
      "retention",
      "loyalty",
      "experience",
      "benchmark",
      "improvement",
      "assessment",
      "operation",
      "workflow",
      "report",
      "analysis",
      "target",
      "objective",
      "solution",
      "tracking",
      "dashboard",
      "review",
      "process",
      "recommendation",
      "insights",
      "forecast",
      "projection",
      "ROI",
      "CAGR",
      "variance",
      "diagnostic",
      "KPIs",
      "quantitative",
      "qualitative",
      "statistics",
      "modeling",
      "demographics",
      "segmentation",
      "predictive",
      "prescriptive",
      "descriptive",
      "dashboard",
      "visualization",
      "big data",
      "data mining",
      "machine learning",
      "artificial intelligence",
      "deep learning",
      "neural networks",
      "business intelligence",
      "reporting",
      "data warehouse",
      "how",
      "why",
      "when",
      "what",
      "privacy",
      "security",
      "me",
      "can",
      "check",
      "collection",
      "profit",
      "data",
      "data-driven",
      "actionable insights",
      "business process",
      "operational efficiency",
      "customer journey",
      "churn rate",
      "customer acquisition",
      "customer lifetime value",
      "competitive analysis",
      "market research",
      "business model",
      "innovation",
    ];
    ``;

    const isRelevant = relevantKeywords.some((keyword) =>
      query.toLowerCase().includes(keyword)
    );

    if (!isRelevant) {
      res.json({ message: "No data found" });
      return;
    }

    // Using static data for simplicity
    const customerBehaviorData = [
      {
        _id: "c1",
        customerId: "77747e622f3496e105554370",
        actions: [
          "visited_homepage",
          "viewed_product",
          "added_to_cart",
          "completed_purchase",
        ],
        timestamps: [
          "2024-05-01T10:00:00Z",
          "2024-05-01T10:05:00Z",
          "2024-05-01T10:15:00Z",
          "2024-05-01T10:30:00Z",
        ],
      },
      {
        _id: "c2",
        customerId: "77747e622f3496e105554371",
        actions: ["visited_homepage", "viewed_product", "left_review"],
        timestamps: [
          "2024-05-02T12:00:00Z",
          "2024-05-02T12:10:00Z",
          "2024-05-02T12:30:00Z",
        ],
      },
      {
        _id: "c3",
        customerId: "77747e622f3496e105554372",
        actions: ["visited_homepage", "viewed_product", "added_to_cart"],
        timestamps: [
          "2024-05-03T09:00:00Z",
          "2024-05-03T09:05:00Z",
          "2024-05-03T09:20:00Z",
        ],
      },
      {
        _id: "c4",
        customerId: "77747e622f3496e105554373",
        actions: ["visited_homepage", "viewed_product", "completed_purchase"],
        timestamps: [
          "2024-05-04T11:00:00Z",
          "2024-05-04T11:10:00Z",
          "2024-05-04T11:25:00Z",
        ],
      },
      {
        _id: "c5",
        customerId: "77747e622f3496e105554374",
        actions: ["visited_homepage", "viewed_product"],
        timestamps: ["2024-05-05T14:00:00Z", "2024-05-05T14:15:00Z"],
      },
      {
        _id: "c6",
        customerId: "77747e622f3496e105554375",
        actions: ["visited_homepage", "viewed_product", "added_to_cart"],
        timestamps: [
          "2024-05-06T08:00:00Z",
          "2024-05-06T08:05:00Z",
          "2024-05-06T08:20:00Z",
        ],
      },
      {
        _id: "c7",
        customerId: "77747e622f3496e105554376",
        actions: ["visited_homepage", "viewed_product", "left_review"],
        timestamps: [
          "2024-05-07T13:00:00Z",
          "2024-05-07T13:10:00Z",
          "2024-05-07T13:30:00Z",
        ],
      },
      {
        _id: "c8",
        customerId: "77747e622f3496e105554377",
        actions: ["visited_homepage", "viewed_product", "completed_purchase"],
        timestamps: [
          "2024-05-08T09:00:00Z",
          "2024-05-08T09:10:00Z",
          "2024-05-08T09:25:00Z",
        ],
      },
      {
        _id: "c9",
        customerId: "77747e622f3496e105554378",
        actions: ["visited_homepage", "viewed_product"],
        timestamps: ["2024-05-09T10:00:00Z", "2024-05-09T10:15:00Z"],
      },
      {
        _id: "c10",
        customerId: "77747e622f3496e105554379",
        actions: [
          "visited_homepage",
          "viewed_product",
          "added_to_cart",
          "completed_purchase",
        ],
        timestamps: [
          "2024-05-10T15:00:00Z",
          "2024-05-10T15:05:00Z",
          "2024-05-10T15:20:00Z",
          "2024-05-10T15:35:00Z",
        ],
      },
    ];

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
        _id: "f1",
        customerId: "77747e622f3496e105554370",
        date: "2024-05-01",
        feedback: "Great service!",
        rating: 5,
      },
      {
        _id: "f2",
        customerId: "77747e622f3496e105554371",
        date: "2024-05-02",
        feedback: "Food was cold.",
        rating: 2,
      },
      {
        _id: "f3",
        customerId: "77747e622f3496e105554372",
        date: "2024-05-03",
        feedback: "Loved the pasta.",
        rating: 4,
      },
      {
        _id: "f4",
        customerId: "77747e622f3496e105554373",
        date: "2024-05-04",
        feedback: "Too noisy.",
        rating: 3,
      },
      {
        _id: "f5",
        customerId: "77747e622f3496e105554374",
        date: "2024-05-05",
        feedback: "Excellent dessert.",
        rating: 5,
      },
      {
        _id: "f6",
        customerId: "77747e622f3496e105554375",
        date: "2024-05-06",
        feedback: "Waited too long for a table.",
        rating: 2,
      },
      {
        _id: "f7",
        customerId: "77747e622f3496e105554376",
        date: "2024-05-07",
        feedback: "Great ambiance.",
        rating: 5,
      },
      {
        _id: "f8",
        customerId: "77747e622f3496e105554377",
        date: "2024-05-08",
        feedback: "Food was bland.",
        rating: 3,
      },
      {
        _id: "f9",
        customerId: "77747e622f3496e105554378",
        date: "2024-05-09",
        feedback: "Loved the drinks.",
        rating: 4,
      },
      {
        _id: "f10",
        customerId: "77747e622f3496e105554379",
        date: "2024-05-10",
        feedback: "Service was slow.",
        rating: 2,
      },
    ];
    const inventoryData = [
      {
        _id: "i1",
        itemName: "Spaghetti",
        quantity: 200,
        lastRestocked: "2024-05-01",
      },
      {
        _id: "i2",
        itemName: "Tomato Sauce",
        quantity: 150,
        lastRestocked: "2024-05-02",
      },
      {
        _id: "i3",
        itemName: "Parmesan Cheese",
        quantity: 100,
        lastRestocked: "2024-05-03",
      },
      {
        _id: "i4",
        itemName: "Garlic Bread",
        quantity: 80,
        lastRestocked: "2024-05-04",
      },
      {
        _id: "i5",
        itemName: "Red Wine",
        quantity: 50,
        lastRestocked: "2024-05-05",
      },
      {
        _id: "i6",
        itemName: "Olive Oil",
        quantity: 120,
        lastRestocked: "2024-05-06",
      },
      {
        _id: "i7",
        itemName: "Basil",
        quantity: 90,
        lastRestocked: "2024-05-07",
      },
      {
        _id: "i8",
        itemName: "Mozzarella",
        quantity: 110,
        lastRestocked: "2024-05-08",
      },
      {
        _id: "i9",
        itemName: "Pasta Sauce",
        quantity: 140,
        lastRestocked: "2024-05-09",
      },
      {
        _id: "i10",
        itemName: "Balsamic Vinegar",
        quantity: 70,
        lastRestocked: "2024-05-10",
      },
    ];

    // Add static data for other collections...

    const prompt = `
      Analyze the following data and suggest improvements:
      Customer Behaviour Data :${JSON.stringify(customerBehaviorData, null, 2)}
      Sales Data: ${JSON.stringify(salesData, null, 2)}
      Feedback Data: ${JSON.stringify(feedbackData, null, 2)}
      Inventory Data :${JSON.stringify(inventoryData, null, 2)}
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
        max_tokens: 1000,
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
    res.status(500).json({
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
