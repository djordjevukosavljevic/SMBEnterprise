import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://192.168.1.95:8083/api/image")
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error(error));
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };


    return (
        <section id="gallery" className="container py-5">

            <h2 className="text-center mb-4">
                Gallery
            </h2>

            <Slider {...settings} style={{width: "100%" }}>
                {
                    images.map(image => (
                        <div key={image}>
                            <img
                                src={`http://192.168.1.95:8083/api/image/${image}`}
                                alt={image}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover",
                                    borderRadius: "15px"
                                }}
                            />
                        </div>
                    ))
                }
            </Slider>

        </section>
    );
}