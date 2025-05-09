import Image from 'next/image';
import { FaPhone, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa';

const sponsors = [
    {
        name: 'Millandry Asset Management',
        logo: '/images/sponsors/sponsor1.png',
        link: '#', // Länk till sponsor (tom för nu)
    },
    {
        name: 'Nordic Swimming Club',
        logo: '/images/sponsors/sponsor2.png',
        link: '#', // Länk till sponsor (tom för nu)
    },
    {
        name: 'Sunshine Studio',
        logo: '/images/sponsors/sponsor3.png',
        link: '#', // Länk till sponsor (tom för nu)
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-800 px-6 py-12 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
                {/* Sponsorer */}
                <div>
                    <h2 className="mb-4 text-lg font-semibold">Våra sponsorer</h2>
                    <div className="flex justify-center gap-6">
                        {sponsors.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.link}
                                className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white p-4 shadow-lg"
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={120}  // För att definiera storleken på ikonen
                                        height={120} // För att definiera storleken på ikonen
                                        objectFit="cover" // Gör att bilden fyller cirkeln utan att bli förvrängd
                                        className="rounded-full"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Snabblänkar */}
                <div>
                    <h2 className="mb-4 text-lg font-semibold">Snabblänkar</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#top" className="flex items-center hover:underline">
                                <FaArrowUp className="mr-1 h-4 w-4" />
                                Till toppen
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Kontaktformulär</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">Om klubben</a>
                        </li>
                        <li>
                            <a href="#schedule" className="hover:underline">Schema</a>
                        </li>
                    </ul>
                </div>

                {/* Kontakt */}
                <div>
                    <h2 className="mb-4 text-lg font-semibold">Kontakt</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                            <FaPhone className="mr-2 h-5 w-5 text-gray-300" />
                            Tel: 070-*** 89 02
                        </li>
                        <li className="flex items-center">
                            <FaClock className="mr-2 h-5 w-5 text-gray-300" />
                            Vardagar: 9–12, 13–15
                        </li>
                        <li className="flex items-center">
                            <FaClock className="mr-2 h-5 w-5 text-gray-300" />
                            Helger: 10–11
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="mr-2 h-5 w-5 text-gray-300" />
                            <a href="mailto:klub@sharksweden.se" className="hover:underline">
                                klub@sharksweden.se
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
