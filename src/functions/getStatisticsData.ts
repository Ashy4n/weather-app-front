export const getStatisticsData = async () => {
    const res = await fetch(import.meta.env.VITE_APP_WEATHER_APP_URL + `getStatistics`);
    return res.json();
};
