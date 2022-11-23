interface BoxAnimProps {
    element: Array<any>;
}

export class BoxAnim {
    ticking = false;
    element: Array<any>;

    constructor({ element }: BoxAnimProps) {
        this.element = element;
        this.onScroll();
        window.addEventListener('scroll', this.onScroll);
    }

    private onScroll = () => {
        this.element[0].map((e: any) => {
            return requestAnimationFrame(() => this.updatePos(e));
        });
    };

    private updatePos = (element: any) => {
        if (element.getBoundingClientRect() && element.getBoundingClientRect() !== null) {
            let rect = element.getBoundingClientRect(),
                viewPort = true,
                viewPort2 = true;

            if (rect.top >= 0 && rect.left >= 0 && viewPort && viewPort2 &&
                rect.bottom <= (window.innerHeight + 200 || document.documentElement.clientHeight + 200) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                viewPort = false;

                if ((element as HTMLElement).classList.contains('barProgress')) {
                    element.style.animationName = "barProgress";
                } else {
                    // Pour les cart Experience
                    element.style.visibility = "visible";
                    element.style.animationName = "fadeBox";
                }
            }
        }
    };
}