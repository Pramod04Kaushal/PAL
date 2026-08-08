import "./WhyChoose.css";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import whyChooseData from "../../data/whyChooseData";

function WhyChoose() {
    return (
        <section className="why-choose">

            <Container>

                <SectionHeader
                    badge="Why Choose Us"
                    title="Why Choose PAL Fish Farm"
                    description="We combine quality breeding, healthy fish, and dedicated customer service to provide the best experience for every fish enthusiast."
                    align="center"
                />

                <div className="feature-grid">

                    {whyChooseData.map((feature) => (

                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                        />

                    ))}

                </div>

            </Container>

        </section>
    );
}

export default WhyChoose;