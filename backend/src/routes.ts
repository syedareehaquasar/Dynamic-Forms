import { Router } from "express";
import formRouter from "./routes/form.routes";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json("OK");
});

routes.use("/form", formRouter);

export default routes;
