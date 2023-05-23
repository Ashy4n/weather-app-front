import { useState } from "react";
import { ResultModal } from "./ResultModal/ResultModal";
import { QuestionModal } from "./QuestionModal/QuestionModal";
import { Modal } from "../../UI/Modal/Modal";
import { ModalResolverProps } from "../../../types/Components/ModalResolverProps";

const ModalResolver = (props: ModalResolverProps) => {
    const { position, isSearching, onClose } = props;
    const [wantToSearch, setWantToSearch] = useState<boolean>(false);

    const endSearching = () => {
        onClose();
        setWantToSearch(false);
    };

    if (!isSearching) return null;

    return (
        <Modal onClose={endSearching}>
            {wantToSearch ? (
                <ResultModal position={position} onClose={endSearching} />
            ) : (
                <QuestionModal setWantToSearch={setWantToSearch} onClose={onClose} />
            )}
        </Modal>
    );
};

export { ModalResolver };
