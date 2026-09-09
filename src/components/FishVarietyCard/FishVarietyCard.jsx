import "./FishVarietyCard.css";
import { ArrowRight } from "lucide-react";

function FishVarietyCard({ variety }) {
    return (
        <article className="fish-variety-card">

            <div className="fish-variety-image">

                <img
                    src={variety.image}
                    alt={variety.name}
                />

                <span className="fish-variety-status">
                    <span className="fish-variety-status-dot"></span>
                    {variety.status}
                </span>

            </div>


            <div className="fish-variety-info">

                <span className="fish-variety-label">
                    FISH VARIETY
                </span>

                <h3 className="fish-variety-name">
                    {variety.name}
                </h3>

                <div className="fish-variety-footer">

                    <span className="fish-variety-view">
                        View Details
                    </span>

                    <span className="fish-variety-arrow">
                        <ArrowRight size={17} />
                    </span>

                </div>

            </div>

        </article>
    );
}

export default FishVarietyCard;