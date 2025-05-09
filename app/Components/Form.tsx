"use client";
import { useState } from "react";
import { FaChild, FaSwimmer, FaWater } from "react-icons/fa";

const services = [
    {
        title: "Simskola",
        description: "Perfekt för barn som vill lära sig vattenvana och grundläggande simteknik.",
        price: "Pris: 800 kr / termin",
        icon: <FaChild className="w-8 h-8 text-blue-500 mb-2" />
    },
    {
        title: "Teknikträning",
        description: "För dig som vill förbättra tekniken i crawl, bröstsim eller ryggsim.",
        price: "Pris: 1000 kr / termin",
        icon: <FaSwimmer className="w-8 h-8 text-blue-500 mb-2" />
    },
    {
        title: "Vuxensim",
        description: "Simkurser för vuxna, både nybörjare och fortsättning.",
        price: "Pris: 1200 kr / termin",
        icon: <FaWater className="w-8 h-8 text-blue-500 mb-2" />
    }
];

export default function BookingForm() {
    const [selectedService, setSelectedService] = useState(services[0].title);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Server URL
        const serverUrl = "http://localhost:5000/submit-form";
        const formBody = new URLSearchParams();
        formBody.append("name", formData.name);           // Namn
        formBody.append("email", formData.email);         // E-post
        formBody.append("message", formData.message);     // Meddelande
        formBody.append("selectedService", selectedService); // Vald kurs

        try {
            // Send the data to your server
            const response = await fetch(serverUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
            });

            if (response.ok) {
                alert(`Tack för din bokning, ${formData.name}!\nDu har valt: ${selectedService}`);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert('Något gick fel vid bokningen. Försök igen!');
            }
        } catch (err) {
            console.error("Fel vid inskick:", err);
            alert("Något gick fel vid anslutningen.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Boka en kurs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {services.map((service) => (
                    <button
                        key={service.title}
                        onClick={() => setSelectedService(service.title)}
                        className={`p-4 border rounded-lg text-center transition ${
                            selectedService === service.title ? "border-blue-500 bg-blue-50" : "border-gray-300"
                        }`}
                    >
                        {service.icon}
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.price}</p>
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className=" text-black block text-sm font-medium">Namn</label>
                    <input
                        type="text"
                        required
                        className="w-full border rounded p-2 text-black"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-black  text-sm font-medium">E-post</label>
                    <input
                        type="email"
                        required
                        className="w-full border rounded p-2 text-black"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm text-black font-medium">Meddelande (valfritt)</label>
                    <textarea
                        className="w-full border rounded p-2 text-black"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Skicka bokning
                </button>
            </form>
        </div>
    );
}
