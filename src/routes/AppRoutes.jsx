import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";
import Home from "../pages/Home/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;