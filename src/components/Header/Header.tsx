import { useEffect } from 'react';
import Menu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export default function Header() {
    const menuLinks = [
        {
            title: 'competences',
        }, {
            title: 'projets',
        }, {
            title: 'about',
        }, {
            title: 'contact',
        }
    ];

    useEffect(() => {
        let headerLi = document.querySelectorAll("#header .head > ul li") as NodeListOf<Element>,
            scrollToTop = document.getElementById("scrollTop") as HTMLElement,
            sectionProjets = document.getElementById("projets") as HTMLElement,
            items = document.querySelectorAll("#root section") as NodeListOf<Element>,
            lastScroll = 0,
            observer = new IntersectionObserver(function (observables) {
                observables.forEach((observable) => {
                    if (observable.intersectionRatio > 0.5) {
                        headerLi.forEach((li) => {
                            if ((li.textContent === observable.target.id) || (li.textContent === "à propos" && observable.target.id === "about")) {
                                li.classList.add("active");
                            } else {
                                li.classList.remove("active");
                            }
                        });
                    } else {
                        // remove class active a l'element qui precede ou qui suis la section projets
                        headerLi.forEach(li => {
                            if (li.textContent === observable.target.id || (li.textContent === "à propos" && observable.target.id === "about")) {
                                li.classList.remove("active");
                            }
                        });
                    }
                })
            }, {
                threshold: [0.5]
            });

        items.forEach(function (item) {
            headerLi.forEach((li) => {
                li.classList.remove("active");
            });
            observer.observe(item);
        });

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > (window.innerHeight / 3)) {
                if (lastScroll > window.pageYOffset) {
                    scrollToTop.style.transform = "translateY(0)";
                } else {
                    scrollToTop.style.transform = "translateY(100%)";
                }
            } else {
                scrollToTop.style.transform = "translateY(100%)";
            }
            lastScroll = window.pageYOffset;

            // la section projets est trop longue pour etre observable avec IntersectionObserver
            // si la section projets est visible ajout manuellement de la class active 
            const { scrollTop } = document.documentElement,
                view: any = sectionProjets.getBoundingClientRect(),
                scrollTopAndView = scrollTop + view.top,
                scrollTopAndViewBottom = scrollTop + view.bottom;

            if (scrollTop > (scrollTopAndView - 500)) {
                headerLi.forEach((li) => {
                    if (li.textContent === "projets") {
                        li.classList.add("active");
                    }
                });
            } else {
                headerLi[1].classList.remove("active");
            }

            // si la position du bottom de la section est arriver a la view donc elle est au dessus on retire la class active de projets
            if (scrollTop > (scrollTopAndViewBottom - 200)) {
                headerLi[1].classList.remove("active");
            }
        });
    }, []);

    return (
        <header id="header" className="header">
            <div className='head'>
                <div className="logo">
                    <Logo />
                </div>

                <Menu />

                <ul className='nav'>
                    {menuLinks.map((element, id) => {
                        return (
                            <li key={id}>
                                <a href={`#${element.title}`} style={{ backgroundImage: `url(${require(`../../assets/img/header/` + element.title + '.jpeg').default})` }}>
                                    {element.title === "about" ? "à propos" : element.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <a id="scrollTop" className='scrollTop' href="#intro">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </header>
    )
}
