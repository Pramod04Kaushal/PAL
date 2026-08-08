import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Fish from "../../sections/Fish/Fish";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import Process from "../../sections/Process/Process";
import Stats from "../../sections/Stats/Stats";
import GalleryPreview from "../../sections/GalleryPreview/GalleryPreview";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Fish />
            <WhyChoose />
            <Process />
            <Stats />
            <GalleryPreview />
        </>
    );
}

export default Home;