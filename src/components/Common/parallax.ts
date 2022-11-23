interface ParallaxProps {
    element: Array<any>;
}

export class Parallax {
    windowHeight = 0;
    ticking = false;
    scrolledAmount = 0;
    element: Array<any>;

    constructor({ element }: ParallaxProps) {
        this.element = element;
        this.onScroll();
        window.addEventListener('scroll', this.onScroll);
    }

    private onScroll = () => {
        const { innerHeight, pageYOffset } = window;
        this.scrolledAmount = pageYOffset;
        this.windowHeight = innerHeight;

        if (!this.ticking) {
            this.ticking = true;

            this.element.map((e) => {
                return requestAnimationFrame(() => this.updatePos(e));
            });
        }
    };

    private updatePos = (e: any) => {
        if (e.id === 'blend') {
            let factor = (this.scrolledAmount / this.windowHeight) * 50;
            // let factor2 = this.scrolledAmount / 15;
            let rotate = 45 - factor;
            factor = factor / 25 + 1;

            const transform = `translate(-50%, -50%) rotate(-${rotate}deg) scaleY(${factor})`;
            e.style.transform = transform;
        }
        // else if (e.id === 'intro') {
        //     let factor = this.scrolledAmount / this.windowHeight;
        //     const transform = `translateY(-${factor * 5}%)`;
        //     e.style.transform = transform;
        // }
        else if (e.id === 'about') {
            let factor = this.scrolledAmount / this.windowHeight;
            const transform = `translateY(-${factor * 5 - 15}%)`;
            e.style.transform = transform;
        }
        else if (e.id === 'contact') {
            let factor = this.scrolledAmount / this.windowHeight;
            const transform = `translateY(-${factor * 5 - 35}%)`;
            e.style.transform = transform;
        }
        else {
            let factor = this.scrolledAmount / this.windowHeight;
            // let factor2;

            // if (e.id.id === '') {
            // factor2 = -(this.scrolledAmount / 50 * 3) + 200;
            // } else {
            // factor2 = -(this.scrolledAmount / 4);
            // }

            // const transform = `translate3d(0, -${factor * 5}%, 0)`;
            const transform = `translateY(-${factor * 1.5}%)`;
            e.style.transform = transform;

            // const brightness = factor * -0.7 + 1;
            // const contrast = factor + 1;
            // this.element.style.filter = `brightness(${brightness}) contrast(${contrast})`;
        }
        this.ticking = false;
    };
}