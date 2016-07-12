declare class Animal {
    name: string;
    constructor(name: string);
    getName(): string;
}

declare class Dog extends Animal {
    constructor(name: string, age: number);
    getAge(): number;
}

declare function inc(x: number): number;

export { Animal, Dog, inc };
