import React, { useEffect, useRef } from 'react';
import { Parallax } from '../../Common/parallax';
import { BoxAnim } from '../../Common/boxAnim';
import { ScrollTitle } from '../../Common/scrollTitleMobile';

export default function Competences() {
    const section = useRef(null);
    const skillBar = useRef(new Array());
    const title = useRef(null);

    // Animation ajouter un petit bonome qui pousse la skillbar de frontend

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
        new BoxAnim({
            element: [skillBar.current]
        });
        new ScrollTitle(
            title.current
        )
    }, []);

    return (
        <section id="competences" className="competence" ref={section}>
            <div className="titleGroup">
                <h1 className="title" ref={title}><span className='text'>à votre service</span></h1>
                <h2 className="title2">Mes Compétences</h2>
            </div>

            <div className='skill'>
                <div className="skillDiv">
                    <h2>Wordpress</h2>
                    <div className="skillBar">
                        <div className="progress1"><div className='barProgress' ref={(element) => skillBar.current.push(element)}></div></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Frontend</h2>
                    <h3>React, JavaScript & TypeScript, SASS, jQuery, HTML, CSS, Bootstrap</h3>
                    <div className="skillBar">
                        <div className="progress2"><div className='barProgress' ref={(element) => skillBar.current.push(element)}></div></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Backend</h2>
                    <h3>PHP, Node JS, Express JS, Symfony, Laravel, Socketio</h3>
                    <div className="skillBar">
                        <div className="progress3"><div className='barProgress' ref={(element) => skillBar.current.push(element)}></div></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Autres</h2>
                    <h3>Git, Github & Gitlab, MySQL, Serveur</h3>
                    <div className="skillBar">
                        <div className="progress4"><div className='barProgress' ref={(element) => skillBar.current.push(element)}></div></div>
                    </div>
                </div>
            </div>
            <div className="skillDetails">
                <div className="skillDiv">
                    <h2>Web Master</h2>
                    <ul>
                        <li>Création de site</li>
                        <li>Adaptation résponsive</li>
                        <li>Prise en main des sites déjà développers</li>
                        <li>Maintenance</li>
                        <li>Création de nouvelles pages</li>
                    </ul>
                </div>
                <div className="skillDiv">
                    <h2>Gestion de projet web</h2>
                    <ul>
                        <li>Analyse du projet (avec maquette)</li>
                        <li>Conception (analyse fonctionnelle, arborescence détaillée des contenus)</li>
                        <li>Estimation du temps de travail</li>
                        <li>Mise en place des environnements de développement (local, dev, prod)</li>
                        <li>Développement</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
