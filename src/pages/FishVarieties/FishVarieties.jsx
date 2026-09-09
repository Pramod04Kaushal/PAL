import "./FishVarieties.css";

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import fishData from "../../data/fish";
import fishVarieties from "../../data/fishVarieties";

import FishVarietyCard from "../../components/FishVarietyCard/FishVarietyCard";
import Container from "../../components/ui/Container/Container";

function FishVarieties() {

    const { slug } = useParams();

    const fish = fishData.find(
        (item) => item.slug === slug
    );

    const varieties = fishVarieties[slug] || [];

    if (!fish) {
        return (
            <main className="fish-varieties-not-found">
                <Container>
                    <h1>Fish Not Found</h1>

                    <Link to="/fish">
                        <ArrowLeft size={18} />
                        Back to Our Fish
                    </Link>
                </Container>
            </main>
        );
    }

    return (
        <main className="fish-varieties">

            {/* =========================
                HERO
            ========================= */}

            <section className="fish-varieties-hero">

                <Container>

                    <Link
                        to="/fish"
                        className="fish-varieties-back"
                    >
                        <ArrowLeft size={18} />
                        Back to Our Fish
                    </Link>

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
                                Explore our available {fish.name} varieties,
                                carefully selected and raised with quality care
                                at PAL Fish Farm.
                            </p>

                            <div className="fish-varieties-details">

                                <div>
                                    <span>Typical Size</span>
                                    <strong>{fish.size}</strong>
                                </div>

                                <div>
                                    <span>Water Type</span>
                                    <strong>{fish.water}</strong>
                                </div>

                                <div>
                                    <span>Availability</span>
                                    <strong>{fish.status}</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </Container>

            </section>


            {/* =========================
                VARIETIES
            ========================= */}

            <section className="fish-varieties-list">

                <Container>

                    <div className="fish-varieties-heading">

                        <div>

                            <span>
                                OUR COLLECTION
                            </span>

                            <h2>
                                Available {fish.name} Varieties
                            </h2>

                        </div>

                        <p>
                            Discover the varieties currently available
                            at PAL Fish Farm.
                        </p>

                    </div>


                    <div className="fish-varieties-grid">

                        {varieties.map((variety) => (

                            <FishVarietyCard
                                key={variety.id}
                                variety={variety}
                            />

                        ))}

                    </div>

                </Container>

            </section>

        </main>
    );
}

export default FishVarieties;