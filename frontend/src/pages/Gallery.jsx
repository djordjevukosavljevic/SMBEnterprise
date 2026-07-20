import React, { useEffect, useState } from "react";

export default function Gallery() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8083/api/image")
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error("Error fetching images:", error));
    }, []);


    return (
        <section id="gallery" className="container py-5">

            <h2 className="text-center mb-4">
                Gallery
            </h2>

            <div className="row">
                {
                    images.map(image => (
                        <div 
                            className="col-md-4 mb-4" 
                            key={image.id}
                        >
                            <img
                                src={`http://localhost:8083/api/image/file/${image.path}`}
                                alt={image.name}
                                className="img-fluid rounded"
                            />
                        </div>
                    ))
                }
            </div>

        </section>
    );
}