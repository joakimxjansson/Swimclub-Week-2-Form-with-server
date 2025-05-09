import Image from 'next/image';

const teamMembers = [
    {
        name: 'Anna Lindström',
        role: 'Huvudtränare',
        image: '/anna.png',
        bio: 'Anna har över 15 års erfarenhet inom tävlingssimning och ansvarar för elitgruppen.',
    },
    {
        name: 'Marcus Pettersson',
        role: 'Tekniktränare',
        image: '/marcus.png',
        bio: 'Marcus fokuserar på simteknik för både nybörjare och tävlingssimmare.',
    },
    {
        name: 'Elin Sjöberg',
        role: 'Barn- och ungdomstränare',
        image: '/elin.png',
        bio: 'Elin brinner för att utveckla unga simmare och skapa glädje i vattnet.',
    },
    {
        name: 'Oskar Nordin',
        role: 'Fystränare',
        image: '/oskar.png',
        bio: 'Oskar ansvarar för landträningen och skadeförebyggande övningar.',
    },
];

export default function TeamSection() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Vårt team</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Möt våra tränare
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Ett passionerat team som jobbar för att utveckla simmare i alla åldrar.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
                        <p className="text-sm text-blue-600">{member.role}</p>
                        <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}