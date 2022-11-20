import * as express from "express";
import { connect } from "./database/database";
import routes from './routes';

const app = express();
const port = 5002;
connect();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});