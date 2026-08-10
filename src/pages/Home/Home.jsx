import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Fish from "../../sections/Fish/Fish";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import ServicesSection from "../../sections/Services/Services";
import Process from "../../sections/Process/Process";
import Stats from "../../sections/Stats/Stats";
import GalleryPreview from "../../sections/GalleryPreview/GalleryPreview";


function Home() {
    return (
        <>
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="fish">
                <Fish />
            </section>

            <WhyChoose />

            <section id="services">
                <ServicesSection />
            </section>

            <Process />

            <Stats />

            <section id="gallery">
                <GalleryPreview />
            </section>


        </>
    );
}

export default Home;