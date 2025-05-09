'use client'
import { useEffect, useState } from "react";

export default function Gallery() {
    const images = [
        "/images/sim1.jpg",
        "/images/sim2.jpg",
        "/images/sim3.jpg",
        "/images/sim4.jpg",
        "/images/sim5.jpg",
        "/images/sim6.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="gallery" className="bg-white px-6 py-16">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">Galleri</h2>

                <div className="relative h-[40rem] overflow-hidden rounded shadow">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Galleri bild ${index + 1}`}
                                className="h-[40rem] min-w-full object-cover"
                            />
                        ))}
                    </div>

                    {/* Vänster pil */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black p-3 text-3xl text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
                        aria-label="Föregående bild"
                    >
                        ‹
                    </button>

                    {/* Höger pil */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black p-3 text-3xl text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
                        aria-label="Nästa bild"
                    >
                        ›
                    </button>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`h-3 w-3 rounded-full transition-colors ${idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Gå till bild ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
