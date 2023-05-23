export const getHistoryData = async (page: number, limit: number) => {
    const res = await fetch(
        import.meta.env.VITE_APP_WEATHER_APP_URL + `getHistory?page=${page}&limit=${limit}`
    );
    return res.json();
};
