import { ReactElement } from "react"
import { FaSwimmer, FaChild, FaWater } from "react-icons/fa"

interface Service {
    title: string
    description: string
    price: string
    icon: ReactElement
}

const services: Service[] = [
    {
        title: "Simskola",
        description: "Perfekt för barn som vill lära sig vattenvana och grundläggande simteknik.",
        price: "Pris: 800 kr / termin",
        icon: <FaChild className="w-8 h-8 text-blue-500 mb-4" />
    },
    {
        title: "Teknikträning",
        description: "För dig som vill förbättra tekniken i crawl, bröstsim eller ryggsim.",
        price: "Pris: 1000 kr / termin",
        icon: <FaSwimmer className="w-8 h-8 text-blue-500 mb-4" />
    },
    {
        title: "Vuxensim",
        description: "Simkurser för vuxna, både nybörjare och fortsättning.",
        price: "Pris: 1200 kr / termin",
        icon: <FaWater className="w-8 h-8 text-blue-500 mb-4" />
    }
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-blue-50 text-gray-900 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-700">Simutbildningar & Priser</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="max-w-sm p-6 bg-white border border-blue-100 rounded-lg shadow-md mx-auto hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition transform duration-300"
                        >
                            {service.icon}
                            <h5 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h5>
                            <p className="mb-3 text-gray-700">{service.description}</p>
                            <p className="font-bold text-black ">{service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
