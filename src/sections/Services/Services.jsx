import "./Services.css";

import { Link } from "react-router-dom";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/ui/Button/Button";

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

                {/* Hero */}
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

                        <a href="/contact">
                            Contact Us →
                        </a>

                    </div>

                </div>


                {/* Service Highlight */}
                <div className="services-highlight">

                    <div className="services-highlight-image">
                        <span>
                            Service Image
                        </span>
                    </div>

                    <div className="services-highlight-content">

                        <span className="services-highlight-badge">
                            Why Choose Our Services
                        </span>

                        <h2>
                            Quality Care From Farm to Customer
                        </h2>

                        <p>
                            At PAL Fish Farm, every stage is handled with
                            care. From breeding and fish selection to
                            preparation and delivery, we focus on maintaining
                            quality and healthy fish.
                        </p>

                        <div className="services-features">

                            <div>
                                <span>✓</span>
                                Healthy Fish
                            </div>

                            <div>
                                <span>✓</span>
                                Professional Care
                            </div>

                            <div>
                                <span>✓</span>
                                Quality Selection
                            </div>

                            <div>
                                <span>✓</span>
                                Reliable Service
                            </div>

                        </div>

                    </div>

                </div>


                {/* CTA */}
                <div className="services-cta">

                    <div>

                        <span className="services-cta-badge">
                            Need Quality Fish?
                        </span>

                        <h2>
                            Let's Find the Right Fish for You
                        </h2>

                        <p>
                            Contact PAL Fish Farm and discover our
                            available freshwater fish and services.
                        </p>

                    </div>

                    <Button
                        variant="primary"
                        size="medium"
                    >
                        Contact Us
                    </Button>

                </div>

            </Container>

        </section>
    );
}

export default Services;