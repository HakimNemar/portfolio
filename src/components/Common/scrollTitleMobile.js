export class ScrollTitle {
	constructor(el) {
		this.wrapper = el;
		this.text = el.querySelector('.text');
		this.wrapperHeight = el.clientHeight;
		this.ticking = false;

		this.bind();
		this.onScroll();
		this.onResize();
	}

	bind() {
		window.addEventListener('scroll', () => this.onScroll());
		window.addEventListener('resize', () => this.onResize());
	}

	onResize() {
		this.windowHeight = window.innerHeight;
		this.windowWidth = window.innerWidth;
		if (this.windowWidth >= 768) this.transform(0);
	}

	onScroll() {
		if (this.windowWidth >= 768) return;

		const { top } = this.wrapper.getBoundingClientRect();
		const pourcentage = (top + this.wrapperHeight) / (this.windowHeight + this.wrapperHeight);

		if (!this.ticking && pourcentage > 0 && pourcentage < 1) {
			this.ticking = true;
			const x = (-50, (pourcentage - 0.5) * 100);
			requestAnimationFrame(() => this.transform(x));
		}
	}

	transform(x) {
		this.text.style.transform = `translateX(${x}%)`;
		this.ticking = false;
	}
}
