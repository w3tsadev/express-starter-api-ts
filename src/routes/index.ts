import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import hello from "./hello";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Root API",
  });
});

router.use("/hello", hello);

export default router;
