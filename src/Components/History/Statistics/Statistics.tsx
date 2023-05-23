import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../UI/Loader/Loader";
import { getStatisticsData } from "../../../functions/getStatisticsData";
import styles from "./Statistics.module.css";
import { useState } from "react";

const Statistics = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["statistics"],
        queryFn: getStatisticsData,
        refetchOnWindowFocus: false,
    });

    const [isHidden, setIsHidden] = useState<boolean>(true);

    const toggle = () => {
        setIsHidden((state) => !state);
    };

    if (isFetching || data === undefined)
        return (
            <div className={styles.container + " " + styles.hidden}>
                <Loader />
            </div>
        );

    const containerStyle = isHidden ? styles.container + " " + styles.hidden : styles.container;

    return (
        <div className={containerStyle} onClick={toggle}>
            <h1>Statistics</h1>
            <div>
                <h2>Most Queried City</h2>
                <p>{data.mostQueriedCity}</p>
            </div>
            <div>
                <h2>All Queries</h2>
                <p>{data.allQueries}</p>
            </div>
            <div className={styles.tempContainer}>
                <h2>Temperature</h2>
                <div>AVG : {parseFloat(data.tempData.AVG).toFixed(2)}</div>
                <div>MAX : {data.tempData.MAX}</div>
                <div>MIN : {data.tempData.MIN}</div>
            </div>
        </div>
    );
};
export { Statistics };
