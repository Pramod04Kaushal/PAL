import "./Stats.css";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import StatCard from "../../components/StatCard/StatCard";

import statsData from "../../data/statsData";

function Stats() {

    return (

        <section className="stats">

            <Container>

                <SectionHeader
                    badge="Our Achievement"
                    title="PAL Fish Farm in Numbers"
                    description="Our dedication to quality and customer satisfaction is reflected in the numbers we've achieved over the years."
                    align="center"
                />

                <div className="stats-grid">

                    {statsData.map((stat) => (

                        <StatCard
                            key={stat.id}
                            stat={stat}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}

export default Stats;