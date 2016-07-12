class Medicine {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    use(): void {
        console.log('Using ' + this.name);
    }
    
    getName(): string {
        return this.name;
    }
}

class Beer extends Medicine {
    percentage: number;

    constructor(name, percentage) {
        super(name);
        this.percentage = percentage
    }

    use() {
        console.log('Drinking ' + this.name + '... Hmm, it has ' + this.percentage + '%!');
    }
}

export {Medicine, Beer};

// store = {
//     diseases: [{name: 'ebola', deadly: true}, {name: 'influenca', deadly: false}, {name: 'aids', deadly: true}],
//     medicines: [new Medicine('Aspirin'), new Medicine('Tea'), new Medicine('Placebo'), new Beer('Berliner Weisse', 3)]
// }
//
// function loadDiseases() {
//     return store.diseases
// }
//
// function loadMedicins() {
//     return store.medicines
// }
