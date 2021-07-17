import express, { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { getFullResponse } from "./utils/weatherJSONParser";
import cors from "cors";
import { getResponse, OptionalAutocompleteUrlParams, RequiredAutocompleteUrlParams } from "./utils/autocompleteJSONParser";
import reverseGeocoder, { RequiredReverseGeocoderUrlParams } from "./utils/reverseGeocoderParser";
const app = express();
dotenv.config();

let PORT = process.env.PORT;

app.use(cors());

app.get("/api/weather/:lat/:long", async (req: Request, res: Response) => {
  const queryString: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.lat}&lon=${req.params.long}&exclude=hourly,minutely&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;
  try {
    const weatherAxiosResponse = await axios.get(queryString);
    const response = getFullResponse(weatherAxiosResponse);
    res.send(response);
  } catch (error) {
    res.status(400).send({ error: "An error has occurred" });
  }
});

app.get("/api/placename/:lat/:long", async (req: Request, res: Response) => {
  try {
    const arg: RequiredReverseGeocoderUrlParams = {
      source: "mapbox.places",
      endpoint: "https://api.tiles.mapbox.com",
      latitude: parseFloat(req.params.lat),
      longitude: parseFloat(req.params.long),
      accessToken: `${process.env.MAPBOX_API_KEY}`,
    }
    const optionalArgs: OptionalAutocompleteUrlParams = {
      types: "country,district,region,place",
    };
    const result = await reverseGeocoder(arg, optionalArgs);
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: "An error has occurred" });
  }
});

app.get("/api/autocomplete/:input", async (req: Request, res: Response) => {
  try {
    const arg: RequiredAutocompleteUrlParams = {
      source: "mapbox.places",
      endpoint: "https://api.tiles.mapbox.com",
      query: `${req.params.input}`,
      accessToken: `${process.env.MAPBOX_API_KEY}`,
    };
    const optionalArgs: OptionalAutocompleteUrlParams = {
      types: "country,district,region,place",
    };
    const result = await getResponse(arg, optionalArgs);
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: "An error has occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
