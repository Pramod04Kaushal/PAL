import "./FeatureCard.css";

function FeatureCard({ feature }) {

    const Icon = feature.icon;

    return (
        <article className="feature-card">

            <div className="feature-icon">

                <Icon size={34} />

            </div>

            <h3 className="feature-title">
                {feature.title}
            </h3>

            <p className="feature-description">
                {feature.description}
            </p>

        </article>
    );
}

export default FeatureCard;