import "./Container.css";

function Container({
    children,
    size = "default",
    fluid = false,
}) {
    const classes = [
        "container",
        size !== "default" ? `container-${size}` : "",
        fluid ? "container-fluid" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return <div className={classes}>{children}</div>;
}

export default Container;