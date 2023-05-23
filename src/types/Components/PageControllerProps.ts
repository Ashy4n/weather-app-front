import { Pagination } from "../Pagination";

export type PageControllerProps = {
    pagination: Pagination;
    isFetching: boolean;
    pageAction: (action: "up" | "down" | "set", value?: number) => void;
};
