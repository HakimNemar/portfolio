import React, { useState, useEffect } from 'react'

export default function Mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [hover, setHover] = useState(false);
    const [transform, setTransform] = useState('');
    const [transform2, setTransform2] = useState('');

    const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
        setX(clientX);
        setY(clientY);
    };

    const attachEvents = () => {
        document.querySelectorAll('button, a, [data-cursor-hover]')
            .forEach((el) => {
                el.addEventListener('mouseenter', () => setHover(true));
                el.addEventListener('mouseleave', () => setHover(false));
            });
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        attachEvents();
    }, []);

    useEffect(() => {
        setTransform(`translate(${x}px, ${y}px)`);

        setTimeout(() => {
            setTransform2(`translate(${x}px, ${y}px)`);
        }, 100);
    }, [x, y]);

    return (
        <>
            <div style={{ transform: transform2 }} className={'circle' + (hover ? ' hover' : '')} />
            <div style={{ transform: transform }} className={'point' + (hover ? ' hover' : '')} />
        </>
    )
}
