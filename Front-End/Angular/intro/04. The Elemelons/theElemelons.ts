abstract class Melon {
    public weigth: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weigth = weight;
        this.melonSort = melonSort;
    }
}

export class Watermelon extends Melon {
    public elementIndex: number;
    public element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Water';
    }

    public get toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

export class Firemelon extends Melon {
    public elementIndex: number;
    public element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Fire';
    }

    public get toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

export class Earthmelon extends Melon {
    public elementIndex: number;
    public element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Earth';
    }

    public get toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

export class Airmelon extends Melon {
    public elementIndex: number;
    public element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Air';
    }

    public get toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

export class Melolemonmelon extends Earthmelon {
    public elementIndex: number;
    public element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Earth';
    }

    public get toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }

    public morph(): void {
        this.element = ['Water', 'Fire', 'Earth', 'Air'][Math.round(Math.random() * 3)];
    }
}

let newWatermelon : Watermelon = new Watermelon(12.5, "Kingsize")
console.log(newWatermelon.toString)

let newMelolemonmelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize")
console.log(newMelolemonmelon.toString)
