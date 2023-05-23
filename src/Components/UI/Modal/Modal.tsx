import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import { dropIn } from "../../../Animations/Modal";

type ModalProps = {
    children: JSX.Element | JSX.Element[];
    onClose?: () => void;
};

const Modal = (props: ModalProps) => {
    const { children, onClose } = props;

    const ModalJSX = (
        <div className={styles.modal}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.modalOverlay}
                onClick={onClose}
            ></motion.div>
            <motion.div
                key={"modal"}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                className={styles.modalContent}
            >
                {children}
            </motion.div>
        </div>
    );

    return ReactDOM.createPortal(ModalJSX, document.getElementById("modal") as HTMLElement);
};

export { Modal };
