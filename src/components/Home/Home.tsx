import { useEffect } from 'react';
import Header from '../Header/Header';
import Intro from '../Pages/Intro/Intro';
import Competences from '../Pages/Competences/Competences';
import Projects from '../Pages/Projects/Projects';
import About from '../Pages/About/About';
import VignetteResponsive from '../Pages/VignetteResponsive/VignetteResponsive';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Footer/Footer';

export default function Index() {
    const mousemove = () => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor?.setAttribute('style', `top:${e.pageY - 7}px; left:${e.pageX - 7}px`);
        });
    }

    useEffect(() => {
        mousemove();

        document.addEventListener('scroll', (e) => {
            mousemove();
        });
    }, []);

    return (
        <>
            <Header />

            <Intro />

            <Competences />

            <Projects />

            <About />

            <VignetteResponsive />

            <Contact />

            <Footer />
        </>
    )
}
