import axios from "axios";

export type RequiredReverseGeocoderUrlParams = {
  source: "mapbox.places" | "mapbox.places-permanent";
  endpoint: string;
  latitude: number;
  longitude: number;
  accessToken: string;
};

export type OptionalReverseGeocoderUrlParams = {
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

type Result = {
  address: string;
};

type MapBoxApiResponse = {
  features: {
    place_name: string;
  }[];
};

const reverseGeocoder = async (
  required: RequiredReverseGeocoderUrlParams,
  optional?: OptionalReverseGeocoderUrlParams
) => {
  return await search(required, optional);
};
const search = async (required: RequiredReverseGeocoderUrlParams, optional?: OptionalReverseGeocoderUrlParams) => {
  let URI = `${required.endpoint}/geocoding/v5/${required.source}/${required.longitude},${required.latitude}.json?&access_token=${required.accessToken}`;
  if (optional) URI += getOptionals(optional);
  URI = encodeURI(URI);
  let res;
  try {
    const response = await axios.get(URI);
    res = response.data;
    res = mapResult(res);
  } catch (error) {
    res = { error: "An error has occurred" };
  }
  return res;
};

const mapResult = (res: MapBoxApiResponse): Result => {
  let val = { address: "" };
  for (let index = 0; index < res.features?.length; index++) {
    val.address = res.features[index].place_name;
    break;
  }
  return val;
};

const getOptionals = (optional: OptionalReverseGeocoderUrlParams): string => {
  let str = "";
  for (const key in optional) {
    str = `${str}&${key}=${optional[key as keyof OptionalReverseGeocoderUrlParams]}`;
  }
  return str;
};

export default reverseGeocoder;
