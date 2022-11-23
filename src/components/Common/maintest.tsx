import React, { useEffect, useState } from 'react';

function useMain(element: any) {
    console.log(element);

    const [windowHeight, setWindowHeight] = useState(0);
    const [ticking, setTicking] = useState(Boolean);
    const [scrolledAmount, setScrolledAmount] = useState(0);

    const onScroll = () => {
        if (!element) {
            return null;
        }

        const { innerHeight, pageYOffset } = window;
        setScrolledAmount(pageYOffset);
        setWindowHeight(innerHeight);

        if (!ticking) {
            setTicking(true);
            requestAnimationFrame(updatePos);
        }
    };

    const updatePos = () => {
        if (element.id === 'blend') {
            let factor = (scrolledAmount / windowHeight) * 14;
            // let factor2 = scrolledAmount / 15;
            let factor3 = 45 - factor;
            factor = factor / 10 + 1;

            const transform = `translate(-50%, -50%) rotate(-${factor3}deg) scaleY(${factor})`;
            element.style.transform = transform;
        } else {
            let factor = scrolledAmount / windowHeight;
            let factor2;

            if (element.id === 'before4') {
                // factor2 = -(scrolledAmount / 50 * 3) + 200;
            } else {
                factor2 = -(scrolledAmount / 4);
            }

            const transform = `translate3d(0, ${factor * 24}%, 0)`;
            element.style.transform = transform;

            // const brightness = factor * -0.7 + 1;
            // const contrast = factor + 1;
            // element.style.filter = `brightness(${brightness}) contrast(${contrast})`;
        }
        setTicking(false);
    };

    useEffect(() => {
        // onScroll();
        window.addEventListener('scroll', onScroll);

    }, []);
}

export default useMain;
