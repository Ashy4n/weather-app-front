import { Weather } from "./Weather";

export type WeatherData = {
    city: String;
    country: String;
    createdAt: String;
    id: number;
    lat: number;
    lng: number;
    weather: Weather;
};
