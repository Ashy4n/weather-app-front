export const animation = {
    left: {
        hidden: {
            x: "-100vw",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                damping: 100,
                stiffness: 500,
            },
        },
        exit: {
            x: "100vh",
            opacity: 0,
        },
    },

    right: {
        hidden: {
            x: "100vw",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                damping: 100,
                stiffness: 500,
            },
        },
        exit: {
            x: "-100vh",
            opacity: 0,
        },
    },
};
