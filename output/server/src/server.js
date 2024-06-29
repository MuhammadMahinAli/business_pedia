// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import app from "./app.js";


// dotenv.config();


// // const app = express();
// // app.use(cors());
// const port = process.env.PORT || 3000;

// export const db = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("🚀 Database connected successfully");
    
    
//   } catch (err) {
//     console.log("Failed to connect database", err);
//   }
// }



// // Body Parser Middleware
// app.use(bodyParser.json());


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// db();


import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import app from "./app.js";


dotenv.config();
const port = process.env.PORT || 3000;

console.log(process.env.OPENAI_API_KEY);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


