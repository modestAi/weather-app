export interface Coordinates {
  coordinates: {
    lat: number;
    long: number;
  };
}
interface PlaceName {
  placeName: string;
}
export type AddressType = Coordinates & PlaceName;

export type SmallCardProps = {
  day: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
};
