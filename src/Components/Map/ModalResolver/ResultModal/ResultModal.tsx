import { getWeatherData } from "../../../../functions/getWeatherData";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../UI/Loader/Loader";
import { WeatherItem } from "../../../WeatherItem/WeatherItem";
import { WeatherData } from "../../../../types/WeatherData";
import { ResultModalProps } from "../../../../types/Components/ResultModalProps";

const ResultModal = (props: ResultModalProps) => {
    const { position } = props;

    const { data, isFetching } = useQuery<WeatherData>({
        queryKey: ["weather"],
        queryFn: () => {
            return getWeatherData(position);
        },
        refetchOnWindowFocus: false,
    });

    if (isFetching || data === undefined) return <Loader />;

    return <WeatherItem data={data} type="Display" />;
};

export { ResultModal };
