import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";

function App() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
