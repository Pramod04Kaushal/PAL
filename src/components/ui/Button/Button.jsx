import "./Button.css";

function Button({
    children,
    variant = "primary",
    size = "medium",
    type = "button",
    disabled = false,
    onClick,
}) {

    const classes = [
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
    ].join(" ");

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;