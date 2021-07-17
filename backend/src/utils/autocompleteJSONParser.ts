import axios from "axios";

export type RequiredAutocompleteUrlParams = {
  source: "mapbox.places" | "mapbox.places-permanent";
  endpoint: string;
  query: string;
  accessToken: string;
};

export type OptionalAutocompleteUrlParams = {
  proximity?: string;
  fuzzyMatch?: boolean;
  routing?: boolean;
  worldview?: string;
  language?: string;
  autocomplete?: boolean;
  country?: string;
  boundingBox?: number;
  types?: string;
};

type MapBoxApiResponse = {
  features: {
    place_name: string;
    geometry: {
      coordinates: [lat: number, long: number];
    };
  }[];
};

export type Result = {
  placeName: string;
  coordinates: { lat: number; long: number };
}[];

const getOptionals = (optional: OptionalAutocompleteUrlParams): string => {
  let str = "";
  for (const key in optional) {
    str = `${str}&${key}=${optional[key as keyof OptionalAutocompleteUrlParams]}`;
  }
  return str;
};

const mapResult = (res: MapBoxApiResponse): Result => {
  return res.features?.map((val) => {
    return {
      placeName: val.place_name,
      coordinates: {
        long: val.geometry.coordinates[0],
        lat: val.geometry.coordinates[1],
      },
    };
  });
};

const search = async (required: RequiredAutocompleteUrlParams, optional?: OptionalAutocompleteUrlParams) => {
  let URI = `${required.endpoint}/geocoding/v5/${required.source}/${required.query}.json?access_token=${required.accessToken}`;
  if (optional) {
    URI = URI + getOptionals(optional);
  }
  URI = encodeURI(URI);
  let res;
  try {
    const response = await axios.get(URI);
    res = response.data;
  } catch (error) {
    res = { error: "An error has occurred" };
  }
  return res;
};

export const getResponse = async (
  required: RequiredAutocompleteUrlParams,
  optional?: OptionalAutocompleteUrlParams
): Promise<Result> => {
  const json = await search(required, optional);
  return mapResult(json);
};
