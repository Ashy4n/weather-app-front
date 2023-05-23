import { getFormattedPosition } from "../../functions/getFormattedPosition";
import { WeatherData } from "../../types/WeatherData";
import Display from "./WeatherItemDisplay.module.css";
import List from "./WeatherItemList.module.css";

type WeatherItemProps = {
    data: WeatherData;
    type: "Display" | "ListItem";
};

const WeatherItem = (props: WeatherItemProps) => {
    const { data, type } = props;
    const weather = data.weather;

    let styles = Display;
    if (type === "ListItem") styles = List;

    return (
        <div className={styles.container}>
            <div className={styles.location}>
                <div className={styles.latLng}>{getFormattedPosition(data.lat, data.lng)}</div>
                <div className={styles.city}>{data.city}</div>
            </div>
            <div className={styles.weather}>
                <img
                    className={styles.img}
                    src={`https://openweathermap.org/img/wn/${weather.imageUrl}.png`}
                />
                <div className={styles.description}>{weather.description}</div>
            </div>
            <div className={styles.information}>
                <div className={styles.temp}>
                    {weather.temperatureValue}°{weather.temperatureUnit}
                </div>
                <div className={styles.wind}>Wind : {weather.wind} m/s</div>
            </div>
        </div>
    );
};

export { WeatherItem };
