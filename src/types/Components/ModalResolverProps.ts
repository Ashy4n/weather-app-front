import { Position } from "../Position";

export type ModalResolverProps = {
    position: Position;
    isSearching: boolean;
    onClose: () => void;
};
