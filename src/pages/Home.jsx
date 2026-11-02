import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Engineering from "../components/sections/Engineering";
import Experience from "../components/sections/Experience";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import HowIBuild from "../components/sections/HowIBuild";
import Navbar from "../components/layout/Navbar";
import SelectedWork from "../components/sections/SelectedWork";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <SelectedWork />
                <Engineering />
                <HowIBuild />
                <About />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default Home;