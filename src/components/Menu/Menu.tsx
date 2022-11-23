import { useRef, useEffect, useState } from 'react'
import BtnMenu from './BtnMenu/BtnMenu';
import Github from '../../assets/img/github.png';
import Linkedin from '../../assets/img/linkedin.png';
import CV from '../../assets/img/cv.png';
import pdf from '../../assets/PDF/NemarHakim.pdf';


export default function Menu() {
    const menu = useRef<HTMLDivElement>(null);
    const [themenu, setThemenu] = useState<any>(null);
    const menuLinks = [
        // un objet, url et nom
        'competences',
        'projets',
        'about',
        'contact'
    ];

    useEffect(() => {
        setThemenu(menu.current);
    }, [])

    return (
        <>
            <BtnMenu menu={themenu} />

            <div className='menu' id="menu" ref={menu}>
                <ul className='navMobile'>
                    {menuLinks.map((element, id) => {
                        return <li key={id}><a href={`#${element}`}>{element}</a></li>
                    })}
                </ul>

                <ul className='social'>
                    <li>
                        <a href='https://github.com/HakimNemar' target="_blank" rel="noreferrer">
                            <img className="iconLink" src={Github} alt="GitHub" title="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/hakim-nemar' target="_blank" rel="noreferrer">
                            <img className="iconLink" src={Linkedin} alt="Linkedin" title="Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href={pdf} className="CV" target="_blank" rel="noopener noreferrer">
                            <img className="iconLink" src={CV} alt="CV" title="Curriculum Vitae" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
