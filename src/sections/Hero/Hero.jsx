import Container from "../../components/common/Container/Container";
import Button from "../../components/ui/Button/Button";

import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <Container>

                <div className="hero-content">

                    <div className="hero-text">

                        <span className="hero-badge">
                            Premium Fish Farm
                        </span>

                        <h1>
                            Premium Freshwater Fish
                            <br />
                            Breeding in Sri Lanka
                        </h1>

                        <p>
                            We specialize in healthy Guppy,
                            Betta, Koi and Aquarium Fish
                            raised with professional care
                            and sustainable breeding methods.
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