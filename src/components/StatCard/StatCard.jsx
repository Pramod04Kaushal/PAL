import "./StatCard.css";

function StatCard({ stat }) {

    const Icon = stat.icon;

    return (

        <article className="stat-card">

            <div className="stat-icon">

                <Icon size={30} />

            </div>

            <h3 className="stat-value">
                {stat.value}
            </h3>

            <p className="stat-label">
                {stat.label}
            </p>

        </article>

    );

}

export default StatCard;