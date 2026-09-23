import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";

import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <Container>

                <div className="hero-content">

                    <div className="hero-text">

                        <span className="hero-badge">
                            PAL | Pramod Aqua Life
                        </span>

                        <h1>
                            Quality Freshwater Fish
                            <br />
                            Raised With Care
                        </h1>

                        <p>
                            Explore our collection of healthy Guppy, Betta, Koi and aquarium fish, carefully bred and raised at PAL Fish Farm in Sri Lanka.
                        </p>

                        <div className="hero-buttons">

                            <Button variant="primary">
                                Explore Fish
                            </Button>

                            <Button variant="secondary">
                                Contact Us
                            </Button>

                        </div>

                    </div>

                    <div className="hero-image">

                        Hero Image

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Hero;