import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Fish from "../pages/Fish/Fish";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/fish" element={<Fish />} />

                    <Route path="/services" element={<Services />} />

                    <Route path="/gallery" element={<Gallery />} />

                    <Route path="/blog" element={<Blog />} />

                    <Route path="/contact" element={<Contact />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;