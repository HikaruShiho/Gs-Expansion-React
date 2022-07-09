import express from "express";
import { muscleRouter } from "./routes/muscle.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

app.get("/", (req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

app.use("/muscle", (req, res) => muscleRouter(req, res));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
