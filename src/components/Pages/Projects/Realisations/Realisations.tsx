import { useState, useEffect, SyntheticEvent } from 'react';
import { DataRealisationsTest } from '../../../Common/data';

export default function Realisations() {
    const [data, setData] = useState(Array);

    useEffect(() => {
        setData(DataRealisationsTest);
    }, []);

    const handleClick = (e: SyntheticEvent) => {
        let element = e.target as HTMLElement;

        if (element.tagName === "VIDEO") {
            if ((element as HTMLVideoElement).paused) {
            } else {
                (element as HTMLVideoElement).pause();
                element.style.zIndex = "-2";
            }
        } else {
            if ((element.children[0] as HTMLVideoElement).paused) {
                (element.children[0] as HTMLVideoElement).play();
                (element.children[0] as HTMLElement).style.zIndex = "1";
            }
        }
    }

    return (
        <ul className="realisations">
            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    return (
                        <li key={id}>
                            <div className="ProjectThumbnail_text">
                                <h1>{e.title}</h1>
                                <h3>{e.date}</h3>
                                <p>{e.description}</p>
                                <a href={e.url} target="_blank" rel="noreferrer">Jeter un coup d'oeil</a>
                            </div>
                            <figure className="ProjectThumbnail_figure" data-cursor-hover onClick={handleClick}>
                                <video loop muted data-cursor-hover>
                                    <source type="video/mp4" src={require(`../../../../assets/video/${e.video}`).default} />
                                </video>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}
