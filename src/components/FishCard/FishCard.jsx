import "./FishCard.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FishCard({ fish }) {
    return (
        <article className="fish-card">

            <div className="fish-image">

                <img
                    src={fish.image}
                    alt={fish.name}
                />

                <span className="fish-status">
                    {fish.status}
                </span>

            </div>

            <div className="fish-info">

                <span className="fish-category">
                    {fish.category}
                </span>

                <h3 className="fish-name">
                    {fish.name}
                </h3>

                <p className="fish-description">
                    {fish.description}
                </p>


                <Link
                    to={`/fish/${fish.slug}`}
                    className="fish-button"
                >
                    View Details

                    <ArrowRight
                        size={18}
                        className="fish-arrow"
                    />
                </Link>

            </div>

        </article>
    );
}

export default FishCard;