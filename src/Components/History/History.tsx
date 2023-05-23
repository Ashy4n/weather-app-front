import styles from "./History.module.css";
import { PageController } from "./PageController/PageController";
import { useState } from "react";
import { Loader } from "../UI/Loader/Loader";
import { WeatherItem } from "../WeatherItem/WeatherItem";
import { getHistoryData } from "../../functions/getHistoryData";
import { useQuery } from "@tanstack/react-query";
import { WeatherHistory } from "../../types/WeatherHistory";
import { AnimatePresence, motion } from "framer-motion";
import { animation } from "../../Animations/History";
import { Statistics } from "./Statistics/Statistics";

const PAGE_LIMIT = 10;

const HistoryView = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [direction, setDirection] = useState("left");

    const { data, isLoading, isFetching } = useQuery<WeatherHistory>({
        queryKey: [currentPage],
        queryFn: () => {
            return getHistoryData(currentPage, PAGE_LIMIT);
        },
        keepPreviousData: true,
    });

    const pageAction = (action: "up" | "down" | "set", value?: number) => {
        if (action === "set" && value) {
            setCurrentPage(value);
            return;
        }
        if (action === "up") {
            setCurrentPage((page) => page + 1);
            setDirection("left");
            return;
        }
        setCurrentPage((page) => page - 1);
        setDirection("right");
    };

    if (isLoading || data === undefined)
        return (
            <div className={styles.container}>
                <Loader />
            </div>
        );

    if (data.pagination.total_items === 0)
        return (
            <div className={styles.container}>
                <h1 className={styles.empty}>History is empty</h1>
            </div>
        );

    return (
        <div className={styles.container}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentPage}
                    variants={direction === "left" ? animation.left : animation.right}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={styles.listContainer}
                >
                    {data.items.map((data) => {
                        return <WeatherItem key={data.id} data={data} type="ListItem" />;
                    })}
                </motion.div>
            </AnimatePresence>
            <PageController
                isFetching={isFetching}
                pagination={data.pagination}
                pageAction={pageAction}
            />
            <Statistics />
        </div>
    );
};

export { HistoryView };
