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


