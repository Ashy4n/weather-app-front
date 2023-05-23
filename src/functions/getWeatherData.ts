import { Position } from "../types/Position";

export const getWeatherData = async (marker: Position) => {
    const res = await fetch(
        import.meta.env.VITE_APP_WEATHER_APP_URL + `getWeather?lat=${marker.lat}&lng=${marker.lng}`
    );

    return res.json();
};
