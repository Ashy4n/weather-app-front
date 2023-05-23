import { QuestionModalProps } from "../../../../types/Components/QuestionModalProps";
import styles from "./QuestionModal.module.css";

const QuestionModal = (props: QuestionModalProps) => {
    const { setWantToSearch, onClose } = props;

    return (
        <div className={styles.modal}>
            <p className={styles.question}>
                Do you want to search <br />
                weather for picked location ?
            </p>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.button}
                    onClick={() => {
                        setWantToSearch(true);
                    }}
                >
                    yes
                </button>
                <button className={styles.button} onClick={onClose}>
                    no
                </button>
            </div>
        </div>
    );
};
export { QuestionModal };
