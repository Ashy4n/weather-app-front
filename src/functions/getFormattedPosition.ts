export const getFormattedPosition = (lat: number, lng: number) => {
    return `${lat > 0 ? "N" : "S"} ${Math.abs(Number(lat.toFixed(2)))}° ${
        lng > 0 ? "E" : "W"
    } ${Math.abs(Number(lng.toFixed(2)))}°`;
};
