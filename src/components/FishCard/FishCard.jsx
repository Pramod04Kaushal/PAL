import "./FishCard.css";
import { ArrowRight } from "lucide-react";

function FishCard({ fish }) {
    return (
        <article className="fish-card">

            <div className="fish-image">

                <span className="fish-status">
                    {fish.status}
                </span>

                <span className="fish-image-text">
                    Fish Image
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


                <button className="fish-button">
                    View Details

                    <ArrowRight
                        size={18}
                        className="fish-arrow"
                    />
                </button>

            </div>

        </article>
    );
}

export default FishCard;