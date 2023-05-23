import { Route, Routes } from "react-router";
import { HistoryView } from "./Components/History/History";
import { Menu } from "./Components/UI/Menu/Menu";
import { Map } from "./Components/Map/Map";

function App() {
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/history" element={<HistoryView />} />
            </Routes>
        </div>
    );
}

export default App;
