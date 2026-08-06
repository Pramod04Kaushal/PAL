import "./Fish.css";
import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import fishData from "../../data/fish";
import FishCard from "../../components/FishCard/FishCard";

function Fish() {
    return (
        <section className="fish">
            <Container>

                <SectionHeader
                    badge="Our Fish"
                    title="Our Premium Fish Collection"
                    description="Discover our carefully bred collection of healthy freshwater fish, raised with exceptional care and quality."
                    align="center"
                />

                <div className="fish-grid">

                    {fishData.map((fish) => (

                        <FishCard
                            key={fish.id}
                            fish={fish}
                        />

                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Fish;