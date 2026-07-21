import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";


export default function Gallery() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://192.168.1.95:8083/api/image")
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error(error));
    }, []);


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        swipe: true
    };


    return (
        <section id="gallery" className="gallery-section container py-5">

            <h2 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "900", textAlign: "center", marginBottom: "6rem" }}>
            <b>Gallery</b>
            </h2>

            <Slider {...settings}>

                {
                    images.map(image => (
                        <div 
                            key={image}
                            className="gallery-slide"
                        >
                            <img
                                src={`http://192.168.1.95:8083/api/image/${encodeURIComponent(image)}`}
                                alt={image}
                                className="gallery-image"
                            />
                        </div>
                    ))
                }

            </Slider>


        </section>
    );
}