import { useState, useEffect, useRef } from 'react';
import { DataParcours } from '../../../Common/data';
import { BoxAnim } from '../../../Common/boxAnim';

export default function Timeline() {
    const [data, setData] = useState(Array);
    const box = useRef(new Array());

    useEffect(() => {
        setData(DataParcours);

        new BoxAnim({
            element: [box.current]
        });
    }, []);

    return (
        <div className="timline">
            <div className="line"></div>

            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    let key = id + 1;

                    return (
                        <div key={id} className="cart">
                            <div className={"box b" + key} id={"b" + key} data-anim={key} ref={(element) => box.current.push(element)}>
                                {e.date &&
                                    <h6 className="date">{e.date}</h6>
                                }
                                <h2 className="title">{e.title}</h2>
                                {e.entreprise ?
                                    <h3 className="entreprise">
                                        {e.entreprise}
                                        {e.contrat &&
                                            <span className="contrat"> - {e.contrat}</span>
                                        }
                                    </h3>
                                    :
                                    <br />
                                }
                                {e.ecole ?
                                    <h3 className="ecole">{e.ecole}</h3>
                                    :
                                    <br />
                                }
                                <div className='divLogo'>
                                    <img className='logo' src={require(`../../../../assets/img/logo/${e.logo}`).default} alt={e.title} />
                                </div>
                            </div>
                            <div className={"rond r" + key} data-anim={key}></div>
                        </div>
                    )
                })
            }
        </div >
    )
}
