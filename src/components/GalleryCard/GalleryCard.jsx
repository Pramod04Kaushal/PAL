import "./GalleryCard.css";

function GalleryCard({ item }) {

    return (

        <article className={`gallery-card ${item.size}`}>

            <div className="gallery-image">

                <span className="gallery-placeholder">
                    Image
                </span>

                <div className="gallery-overlay">

                    <span className="gallery-category">

                        {item.category}

                    </span>

                    <h3 className="gallery-title">

                        {item.title}

                    </h3>

                </div>

            </div>

        </article>

    );

}

export default GalleryCard;