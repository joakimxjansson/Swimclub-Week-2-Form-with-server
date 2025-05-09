export default function Hero() {
    return (
        <section className="relative h-screen text-white flex items-center justify-center text-center px-4 overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/Herovideo.mp4" // <-- ändrat till rätt filnamn!
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="relative z-10 bg-black/50 p-6 rounded">
                <h1 className="text-4xl md:text-6xl font-bold">Välkommen till Shark Swimclub!</h1>
                <p className="mt-4 text-xl">Simning för alla – från nybörjare till elitsimmare.</p>
                <a
                    href="#contact"
                    className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100"
                >
                    Kontakta oss
                </a>
            </div>
        </section>
    );
}
