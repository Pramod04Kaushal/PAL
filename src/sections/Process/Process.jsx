import "./Process.css";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import ProcessCard from "../../components/ProcessCard/ProcessCard";

import processData from "../../data/processData";

function Process() {

    return (

        <section className="process">

            <Container>

                <SectionHeader
                    badge="Our Process"
                    title="How We Deliver Healthy Fish"
                    description="From breeding to delivery, every step is carefully managed to ensure healthy, high-quality freshwater fish."
                    align="center"
                />

                <div className="process-grid">

                    {processData.map((step) => (

                        <ProcessCard
                            key={step.id}
                            step={step}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}

export default Process;