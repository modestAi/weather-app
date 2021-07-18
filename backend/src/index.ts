import express, { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { getFullResponse } from "./utils/JSONParser";
import cors from "cors";
const app = express();
dotenv.config();

let PORT = process.env.PORT;

app.use(cors());

app.get("/api/weather/:lat/:long", async (req: Request, res: Response) => {
  const queryString: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.lat}&lon=${req.params.long}&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`;
  try {
    const weatherAxiosResponse = await axios.get(queryString);
    const response = getFullResponse(weatherAxiosResponse);
    res.send(response);
  } catch (error) {
    res.status(400).send({ error: "An error has occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
