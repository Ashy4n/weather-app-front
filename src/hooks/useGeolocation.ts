import { useEffect, useState } from "react";
import { Position } from "../types/Position";

const useGeolocation = (defaultPosition: Position): Position => {
    const [geolocation, setGeolocation] = useState<Position>(defaultPosition);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setGeolocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    }, []);

    return geolocation;
};

export default useGeolocation;
