import "./FishVarieties.css";
import { useParams } from "react-router-dom";


import fishData from "../../data/fish";
import fishVarieties from "../../data/fishVarieties";
import FishVarietyCard from "../../components/FishVarietyCard/FishVarietyCard";
import Container from "../../components/ui/Container/Container";

function FishVarieties() {

    const { slug } = useParams();

    const fish = fishData.find(
        (item) => item.slug === slug
    );

    const varieties = fishVarieties[slug];

    if (!fish) {
        return <h1>Fish not found</h1>;
    }

    return (
        <main className="fish-varieties">

            <section className="fish-varieties-hero">

                <Container>

                    <div className="fish-varieties-hero-card">

                        <div className="fish-varieties-hero-image">
                            <img
                                src={fish.image}
                                alt={fish.name}
                            />
                        </div>

                        <div className="fish-varieties-hero-info">

                            <span className="fish-varieties-category">
                                {fish.category}
                            </span>

                            <h1>
                                {fish.name}
                            </h1>

                            <p>
                                Explore our available {fish.name} varieties.
                            </p>

                        </div>

                    </div>

                </Container>

            </section>


            <section className="fish-varieties-list">

                <h2>
                    Available Varieties
                </h2>

                <div className="fish-varieties-grid">

                    {varieties?.map((variety) => (

                        <FishVarietyCard
                            key={variety.id}
                            variety={variety}
                        />

                    ))}

                </div>

            </section>

        </main>
    );
}

export default FishVarieties;