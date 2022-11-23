import React, { useEffect, useRef } from 'react';

export default function VignetteResponsive() {
    const section = useRef(null);

    useEffect(() => {
        // new Parallax({
        //     element: [section.current]
        // });
    }, []);

    return (
        <section id="vignetteResponsive" className="vignetteResponsive" ref={section}>
            <h2>Compatible Mobile, Tablettes & PC</h2>
            <h1>Développement Web Responsive</h1>
            <div>
                <img src={require(`../../../assets/img/responsive.png`).default} alt='Ecran' />
            </div>
        </section>
    )
}
