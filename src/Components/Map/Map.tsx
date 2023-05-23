import { GoogleMap, MarkerF as Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Position } from "../../types/Position";
import useGeolocation from "../../hooks/useGeolocation";
import styles from "./Map.module.css";
import { ModalResolver } from "./ModalResolver/ModalResolver";
import { Loader } from "../UI/Loader/Loader";

const Map = () => {
    const geolocation = useGeolocation({ lat: 10, lng: 10 });
    const [marker, setMarker] = useState<Position>(geolocation);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    useEffect(() => {
        setMarker(geolocation);
    }, [geolocation]);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
    });

    const onMarkerSet = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            setMarker({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            });
            setIsSearching(true);
        }
    };

    if (!isLoaded)
        return (
            <div className={styles.container}>
                <Loader />
            </div>
        );

    return (
        <div className={styles.container}>
            <ModalResolver
                position={marker}
                isSearching={isSearching}
                onClose={() => {
                    setIsSearching(false);
                }}
            />
            <GoogleMap
                options={{
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                }}
                center={marker}
                zoom={10}
                mapContainerClassName={styles.mapContainer}
                onClick={onMarkerSet}
            >
                <Marker position={marker} />
            </GoogleMap>
        </div>
    );
};

export { Map };
