class Medicine {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    use(): void {
        throw Error();
        // console.log('Using ' + this.name);
    }
    
    getName(): string {
        return this.name;
    }
}

class Bier extends Medicine {
    percentage: number;

    constructor(name, percentage) {
        super(name);
        this.percentage = percentage
    }

    use() {
        console.log('Drinking ' + this.name + '... Hmm, it has ' + this.percentage + '%!');
    }
}

const store = {
    diseases: [{name: 'Aspirin', deadly: true}, {name: 'influenca'}, {name: 'aids', deadly: true}],
    medicines: [new Medicine('Aspirin'), new Medicine('Tea'), new Medicine('Placebo'), new Bier('Berliner Weisse', 3)]
};

function loadMedicines(): Medicine[] {
    return store.medicines
}

function loadDiseases(): Array<Object|Medicine> {
    return store.diseases
}

export {Medicine, Bier, loadDiseases, loadMedicines};


