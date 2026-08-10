import "./Services.css";

import { Link } from "react-router-dom";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import {
    Fish,
    Dna,
    Package,
    HeartPulse,
    Truck,
    MessageCircleQuestion
} from "lucide-react";

function Services() {
    return (
        <section className="services">

            <Container>

                {/* Services Header */}
                <div className="services-hero">

                    <SectionHeader
                        badge="Our Services"
                        title="Complete Fish Farming Solutions"
                        description="From premium freshwater fish supply to expert care and reliable delivery, PAL Fish Farm provides quality services for fish enthusiasts, hobbyists, and retailers."
                        align="center"
                    />

                </div>


                {/* Services Grid */}
                <div className="services-grid">

                    <div className="service-card">

                        <div className="service-card-icon">
                            <Fish size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Premium Fish Supply</h3>

                        <p>
                            Healthy and carefully selected freshwater
                            fish for hobbyists, collectors, and retailers.
                        </p>

                        <Link to="/fish">
                            Explore Fish →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-card-icon">
                            <Dna size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Fish Breeding</h3>

                        <p>
                            Carefully managed breeding practices focused
                            on healthy and high-quality freshwater fish.
                        </p>

                        <Link to="/contact">
                            Enquire Now →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-card-icon">
                            <Package size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Wholesale Supply</h3>

                        <p>
                            Reliable fish supply solutions for aquarium
                            shops, retailers, and larger requirements.
                        </p>

                        <Link to="/contact">
                            Enquire Now →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-card-icon">
                            <HeartPulse size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Aquarium Fish</h3>

                        <p>
                            Quality ornamental fish selected for home
                            aquariums and professional aquarium setups.
                        </p>

                        <Link to="/fish">
                            View Fish →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-card-icon">
                            <Truck size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Safe Delivery</h3>

                        <p>
                            Fish are carefully prepared and securely
                            handled to support safe transportation.
                        </p>

                        <Link to="/contact">
                            Contact Us →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-card-icon">
                            <MessageCircleQuestion size={30} strokeWidth={1.8} />
                        </div>

                        <h3>Fish Care Guidance</h3>

                        <p>
                            Practical guidance to help customers maintain
                            healthy fish and suitable aquarium conditions.
                        </p>

                        <Link to="/contact">
                            Contact Us →
                        </Link>

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Services;