import { Pagination } from "./Pagination";
import { WeatherData } from "./WeatherData";

export type WeatherHistory = {
    items: WeatherData[];
    pagination: Pagination;
};
