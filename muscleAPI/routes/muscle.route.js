import express from "express";
import { getResult } from "../controllers/muscle.controller.js"

export const muscleRouter = express.Router();

muscleRouter.post("/", (req, res) => getResult(req, res));