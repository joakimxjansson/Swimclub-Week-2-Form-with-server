import Image from "next/image";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import Gallery from './Components/Gallery';
import Contact from "./Components/Contact";
import Services from "./Components/Services"
import Hero from "./Components/Hero"
import Team from "./Components/Team"
import About from "./Components/About"
import Sponsors from "./Components/Sponsors"
import ScrollToTop from "@/app/Components/ScrollToTopButton";
import FadeInSection from "./Components/FadeInSection";

export default function Home() {
    return (
        <main style ={{backgroundColor: '#ffffff'}}>
            <Navbar/>
            <Hero/>
            <FadeInSection>
                <About/>
            </FadeInSection>
            <FadeInSection>
                <Services/>
            </FadeInSection>
            <FadeInSection>
                <Team/>
            </FadeInSection>
            <FadeInSection>
                <Gallery/>
            </FadeInSection>
            <FadeInSection>
                <Sponsors/>
            </FadeInSection>
            <FadeInSection>
                <Contact/>
            </FadeInSection>
            <FadeInSection>
                <Footer/>
            </FadeInSection>
            <ScrollToTop/>
        </main>
    )
}
