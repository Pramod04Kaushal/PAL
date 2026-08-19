import "./FishVarietyCard.css";

function FishVarietyCard({ variety }) {
    return (
        <article className="fish-variety-card">

            <div className="fish-variety-image">

                <img
                    src={variety.image}
                    alt={variety.name}
                />

                <span className="fish-variety-status">
                    {variety.status}
                </span>

            </div>

            <div className="fish-variety-info">

                <h3 className="fish-variety-name">
                    {variety.name}
                </h3>


            </div>

        </article>
    );
}

export default FishVarietyCard;