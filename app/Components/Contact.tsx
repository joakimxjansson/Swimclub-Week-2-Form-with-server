import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
export default function Contact() {
    return (
        <section id="contact" className="bg-white px-6 py-16 text-gray-800 md:px-12">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Kontakta oss</h2>
                <p className="mb-6">Har du frågor eller vill anmäla dig? Skicka ett mejl eller ring oss!</p>
                <div className="space-y-4">
                    <p className="flex items-center justify-center">
                        <FaEnvelope className="mr-2 text-blue-400" />
                        <strong>E-post:</strong> info@simklubben.se
                    </p>
                    <p className="flex items-center justify-center">
                        <FaPhone className="mr-2 text-blue-400" />
                        <strong>Telefon:</strong> 070-123 45 67
                    </p>
                    <p className="flex items-center justify-center">
                        <FaMapMarkerAlt className="mr-2 text-blue-400" />
                        <strong>Adress:</strong> Simhallen 1, 123 45 Vattenstad
                    </p>
                </div>
            </div>
        </section>
    )
}