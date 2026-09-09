import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";
import Home from "../pages/Home/Home";

import FishVarieties from "../pages/FishVarieties/FishVarieties";


function AppRoutes() {
    return (
        <BrowserRouter basename="/PAL">
            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/fish/:slug" element={<FishVarieties />} />



                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;