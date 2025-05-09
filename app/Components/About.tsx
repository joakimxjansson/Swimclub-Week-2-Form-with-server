// components/AboutUsSection.tsx
export default function AboutUsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm uppercase text-gray-500 mb-2">Om Oss</p>
                <h2 className="text-gray-800 text-4xl font-bold mb-6">Upptäck Vår Berättelse</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Välkommen till Shark Swimclub Sweden – där passion för simning möter gemenskap och utveckling.
                    Sedan starten 2010 har vi arbetat för att skapa en inspirerande miljö för simmare i alla åldrar och nivåer.
                    Oavsett om du är nybörjare eller tävlingssimmare erbjuder vi träning, glädje och möjligheter att växa.
                    Med fokus på sammanhållning, teknik och kärleken till vattnet vill vi vara en plats där alla kan hitta sin styrka och glädje i simning.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/swimminghall.svg" // <-- ändra till rätt bild (ex. simrelaterad)
                            alt="Simhall1"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/swimminghall2.svg" // <-- ändra till rätt bild
                            alt="Simhall2"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
