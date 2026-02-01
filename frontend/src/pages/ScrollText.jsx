import React from "react";
import ScrollText from "./ScrollText";

export default function About() {
    return (
        <section id="about" className="container py-5">
            <h2 className="text-center mb-5" style={{ fontSize: "36px" }}>
                About <b>Isotherm</b>
            </h2>

            <div className="text-center mb-5">
                <ScrollText direction="left">
                    We create spaces that combine strength, beauty, and functionality.
                </ScrollText>
            </div>

            <div className="text-center mb-5">
                <ScrollText direction="right">
                    From homes to commercial buildings, every project reflects precision and care.
                </ScrollText>
            </div>

            <div className="text-center mb-5">
                <ScrollText direction="left">
                    Innovation, sustainability, and timeless design guide everything we build.
                </ScrollText>
            </div>
        </section>
    );
}
