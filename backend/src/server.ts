import * as express from "express";
import * as dotenv from "dotenv";
import { connect } from "./database/database";
import routes from "./routes";

const dotenvResult = dotenv.config({ path: __dirname + "/.env" });
if (dotenvResult.error) {
  throw dotenvResult.error;
}

const app = express();
const port = 5002;
connect();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
