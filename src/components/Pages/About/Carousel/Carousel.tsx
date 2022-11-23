import { DataParcours } from '../../../Common/data';
import { useState, useEffect } from 'react';

export default function Carousel() {
    const [data, setData] = useState(Array);
    const [index, setIndex] = useState(0);
    const slideIndex = document.querySelector(".slide") as HTMLElement;
    const slideLi = document.querySelectorAll(".slide li") as NodeListOf<HTMLElement>;
    const ulOverView = document.querySelector(".overview") as HTMLElement;

    useEffect(() => {
        setData(DataParcours.reverse());
    }, []);

    useEffect(() => {
        slideLi.forEach((li, key) => {
            if (key === index) {
                li.classList.add("active");
                updatePos((-li.clientWidth));
            } else {
                li.classList.remove("active");
            }
        });
    }, [index]);

    const updatePos = (clientWidth: number) => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (index < data.length - 1) {
                slideIndex.style.transform = `translateX(${clientWidth * index}px)`;
            } else if (index === data.length - 1) {
                slideIndex.style.transform = `translateX(${clientWidth * (index - 1)}px)`;
            }
        } else if (window.matchMedia("(max-width: 1023px)").matches) {
            if (index < data.length - 2) {
                slideIndex.style.transform = `translateX(${clientWidth * index}px)`;
            } else if (index === data.length - 1) {
                slideIndex.style.transform = `translateX(${clientWidth * (index - 2)}px)`;
            }
        } else {
            if (index < data.length - 3) {
                slideIndex.style.transform = `translateX(${clientWidth * index}px)`;
            } else if (index === data.length - 1) {
                slideIndex.style.transform = `translateX(${clientWidth * (index - 3)}px)`;
            }
        }
        ulOverView.style.transform = `translateX(${-ulOverView.children[0].clientWidth * index}px)`;
    }

    return (
        <div className='timeLine'>
            <div className='carousel'>
                <ul className="overview">
                    {
                        data.length > 0 &&
                        data.map((e: any, id) => {
                            return (
                                <li key={id}>
                                    <div className='divLogo'>
                                        <img className='logo' src={require(`../../../../assets/img/logo/${e.logo}`).default} alt={e.title} />
                                    </div>

                                    <div className='content'>
                                        <img className='logoMobile' src={require(`../../../../assets/img/logo/${e.logo}`).default} alt={e.title} />

                                        {e.entreprise &&
                                            <h2 className="entreprise">{e.entreprise}</h2>
                                        }
                                        {e.ecole &&
                                            <h2 className="ecole">{e.ecole}</h2>
                                        }

                                        {e.date &&
                                            <h6 className="date">
                                                {e.date}
                                                {e.contrat &&
                                                    <span className="contrat"> - {e.contrat}</span>
                                                }
                                            </h6>
                                        }
                                        <h3 className="title">{e.title}</h3>
                                        <p className='description'>{e.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="slide">
                    {
                        data.length > 0 &&
                        data.map((e: any, id) => {
                            return (
                                <li key={id} data-cursor-hover className={(id === 0 ? "active" : "")} onClick={() => { console.log() }}>
                                    <div>
                                        <h2>{e.title}</h2>
                                        <h3>{e.date}</h3>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button className='prev' onClick={() => (index > 0 ? setIndex(index - 1) : setIndex(data.length - 1))}></button>
            <button className='next' onClick={() => (index < data.length - 1 ? setIndex(index + 1) : setIndex(0))}></button>
        </div>
    )
}