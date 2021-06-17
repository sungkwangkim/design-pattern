import { Print } from './Print';
import { Banner } from './Banner';

export class PrintBanner extends Print {
    #banner: Banner;

    constructor(text: string) {
        super();
        this.#banner = new Banner(text);
    }

    printWeak(): void {
        this.#banner.showWithAster();
    }

    printStrong(): void {
        this.#banner.showWithParen();
    }
}
