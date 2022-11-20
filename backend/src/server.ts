import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from 'cors';
import { connect } from "./database/database";
import routes from "./routes";

const dotenvResult = dotenv.config({ path: __dirname + "/.env" });
if (dotenvResult.error) {
  throw dotenvResult.error;
}

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

const app = express();
const port = 5002;
connect();

app.use(cors(options));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
