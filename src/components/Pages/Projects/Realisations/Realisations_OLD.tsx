import React, { useState, useEffect } from 'react';
import { DataRealisations } from '../../../Common/data';

export default function Realisations() {
    const [data, setData] = useState(Array);

    useEffect(() => {
        setData(DataRealisations);
    }, []);

    return (
        <ul className="realisations">
            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    return (
                        <li key={id}>
                            <a href={e.url} target="_blank" rel="noreferrer">
                                <figure>
                                    <img src={require(`../../../../assets/img/${e.img}`).default} alt={e.title} />
                                    <figcaption>
                                        <p>{e.title}</p>
                                        <p>{e.description}</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
