import "./ProcessCard.css";

function ProcessCard({ step }) {

    const Icon = step.icon;

    return (

        <div className="process-item">

            <article className="process-card">

                <span className="process-number">
                    {step.id}
                </span>

                <div className="process-icon-wrapper">

                    <div className="process-icon">

                        <Icon size={34} />

                    </div>



                </div>

                <h3 className="process-title">
                    {step.title}
                </h3>

                <p className="process-description">
                    {step.description}
                </p>

            </article>

            <div className="process-line"></div>

        </div>

    );
}

export default ProcessCard;