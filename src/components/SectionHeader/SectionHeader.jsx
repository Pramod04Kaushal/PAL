import "./SectionHeader.css";

function SectionHeader({
    badge,
    title,
    description,
    align = "left",
}) {
    return (
        <div className={`section-header ${align}`}>

            <span className="section-badge">
                {badge}
            </span>

            <h2 className="section-title">
                {title}
            </h2>

            {description && (
                <p className="section-description">
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionHeader;