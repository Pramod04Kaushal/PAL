import "./About.css";
import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";


import { CheckCircle2, ArrowRight } from "lucide-react";

function About() {
    return (
        <section className="about">
            <Container>

                <div className="about-content">

                    <div className="about-image">

                        <div className="about-image-placeholder">

                            Fish Farm Image

                            <div className="about-image-card">

                                <h3>15+</h3>

                                <p>Years Experience</p>

                            </div>

                        </div>

                    </div>

                    <div className="about-text">

                        <SectionHeader
                            badge="About Us"
                            title="Premium Freshwater Fish Breeding with Passion"
                            description="At PAL Fish Farm, we are dedicated to breeding healthy, vibrant freshwater fish with exceptional care and sustainable farming practices. Every fish is raised in a clean, carefully maintained environment to ensure outstanding quality for hobbyists, collectors, and retailers across Sri Lanka."
                        />

                        <div className="about-features">

                            <div className="about-feature">
                                <CheckCircle2 className="about-feature-icon" />
                                Healthy Fish
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 className="about-feature-icon" />
                                Premonium Quality
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 className="about-feature-icon" />
                                Sustainable Farming
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 className="about-feature-icon" />
                                Expert Care
                            </div>

                        </div>


                        <div className="about-buttons">

                            <Button variant="primary" size="medium">
                                Learn More
                                <ArrowRight size={18} />
                            </Button>

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}

export default About;