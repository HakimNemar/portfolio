import { useEffect, useRef } from 'react';
import { Parallax } from '../../Common/parallax';
// import Timeline from './Timeline/Timeline';
import Carousel from './Carousel/Carousel';
import { ScrollTitle } from '../../Common/scrollTitleMobile';

export default function About() {
    const section = useRef(null);
    const title = useRef(null);

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
        new ScrollTitle(
            title.current
        )
    }, []);

    return (
        <section id="about" className="about" ref={section}>
            <div className="titleGroup">
                <h1 className="title" ref={title}><span className='text'>Parcours</span></h1>
                <h2 className="title2">Mes Éxperiences</h2>
            </div>
            <p className="aboutMe">
                Tout d'abord, bienvenue sur mon portfolio ! Je me présente, je suis Hakim Nemar intégrateur développeur web. Avant de vous aventurer plus loin, il est préférable que vous sachiez un petit bout de ma personne. De nature curieux, je sais rester logique et je suis prêt à me surpasser. Si j'aime l'informatique, c'est parce qu'il s'agit d'un domaine en perpétuelle évolution. On apprend sans arrêt et c'est ce qui me passionne le plus, d'où la création de ce portefeuille qui a pour objectif de vous montrer ma personne à travers ma passion.
            </p>
            <Carousel />
            {/* <Timeline /> */}
        </section>
    )
}
