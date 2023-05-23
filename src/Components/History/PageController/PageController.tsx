import { motion } from "framer-motion";
import styles from "./PageController.module.css";
import { FormEvent, useEffect, useRef } from "react";
import { PageControllerProps } from "../../../types/Components/PageControllerProps";

const PageController = (props: PageControllerProps) => {
    const { pagination, isFetching, pageAction } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.value = String(pagination.current_page);
    }, [pagination.current_page]);

    return (
        <div className={styles.container}>
            <motion.button
                onClick={() => {
                    pageAction("down");
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                disabled={!pagination.has_previous_page}
                className={
                    !pagination.has_previous_page || isFetching
                        ? styles.button + " " + styles.buttonDisabled
                        : styles.button
                }
            >
                <i className="fa-solid fa-arrow-left"></i>
            </motion.button>
            <form
                onSubmit={(event: FormEvent) => {
                    event.preventDefault();
                    const pageNum = Number(inputRef.current?.value);
                    pageAction("set", pageNum);
                }}
            >
                <input
                    ref={inputRef}
                    min={1}
                    max={pagination.total_pages}
                    type="number"
                    className={styles.input}
                ></input>
            </form>
            <i className={styles.icon + " fa-solid fa-ellipsis"}></i>
            <div className={styles.maxPage}>{pagination.total_pages}</div>
            <motion.button
                onClick={() => {
                    pageAction("up");
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                disabled={!pagination.has_next_page || isFetching}
                className={
                    !pagination.has_next_page || isFetching
                        ? styles.button + " " + styles.buttonDisabled
                        : styles.button
                }
            >
                <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
        </div>
    );
};

export { PageController };
