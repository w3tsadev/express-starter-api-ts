import express from "express";
import MessageResponse from "./interfaces/MessageResponse";
import routes from "./routes";
import * as middlewares from "./middlewares";
const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Hi",
  });
});

app.use("/api/v1", routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
