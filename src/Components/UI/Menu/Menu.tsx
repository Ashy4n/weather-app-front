import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <img className={styles.logo} src="../public/logo.svg"></img>
            <Link className={styles.link} to="/">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className={styles.menuItem}
                >
                    Map
                </motion.div>
            </Link>
            <Link className={styles.link} to="/history">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className={styles.menuItem}
                >
                    History
                </motion.div>
            </Link>
        </div>
    );
};
export { Menu };
