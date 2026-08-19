import "./FishVarietiesHero.css";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function FishVarietiesHero() {
    return (
        <section className="fish-varieties-hero">

            <Container>

                <SectionHeader
                    badge="Our Fish"
                    title="Explore Our Fish Varieties"
                    description="Discover our collection of freshwater and ornamental fish, carefully bred and selected at PAL Fish Farm."
                    align="center"
                />

            </Container>

        </section>
    );
}

export default FishVarietiesHero;