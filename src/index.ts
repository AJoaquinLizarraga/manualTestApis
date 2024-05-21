/** @format */

import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/repo", async (req: Request, res: Response) => {
  const { owner, repo } = req.params;
  const url = `https://ajoaquinlizarraga.github.io/Food-API-mine/myApi/data/foodComplexSearch.json`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
