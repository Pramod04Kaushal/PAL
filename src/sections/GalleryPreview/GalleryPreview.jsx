import "./GalleryPreview.css";

import Container from "../../components/ui/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import Button from "../../components/ui/Button/Button";

import galleryData from "../../data/galleryData";

function GalleryPreview() {

    return (

        <section className="gallery-preview">

            <Container>

                <SectionHeader
                    badge="Our Gallery"
                    title="Inside PAL Fish Farm"
                    description="Explore a glimpse of our healthy fish, breeding facilities, and premium aquariums."
                    align="center"
                />

                <div className="gallery-grid">

                    {galleryData.map((item) => (

                        <GalleryCard
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

                <div className="gallery-action">
                    <Button variant="primary" size="medium">
                        View Full Gallery
                    </Button>
                </div>



            </Container>

        </section>



    );

}

export default GalleryPreview;