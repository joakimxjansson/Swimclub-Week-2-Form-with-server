import Image from 'next/image';

const sponsors = [
    {
        name: 'Millandry Asset Management',
        description: 'Millandry Asset Management är vår huvudsponsor och bidrar med finansiellt stöd som möjliggör vår långsiktiga utveckling.',
        logo: '/images/sponsors/sponsor1.png',
    },
    {
        name: 'Nordic Swimming Club',
        description: 'Nordic Swimming Club samarbetar med oss i träningsutbyte och gemensamma evenemang för att främja simsporten i hela regionen.',
        logo: '/images/sponsors/sponsor2.png',
    },
    {
        name: 'Sunshine Studio',
        description: 'Sunshine Studio hjälper oss med professionell design, marknadsföring och foto inför tävlingar och kampanjer.',
        logo: '/images/sponsors/sponsor3.png',
    },
];


export default function Sponsors() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-center text-3xl font-bold text-black">Våra Sponsorer</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
                        >
                            <div className="relative mb-6 h-48 w-48">
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">{sponsor.name}</h3>
                            <p className="text-gray-800">{sponsor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
