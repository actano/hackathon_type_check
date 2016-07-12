import {loadDiseases as diseases, loadMedicines as medicines} from '../layer_1'

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

class Schnaps extends Medicine {
    gll: number;

    constructor(name, percentage) {
        super(name);
        this.gll = percentage
    }
}

function loadMedicines(): Medicine[] {
    return medicines()
}

function loadDiseases(): Array<Object|Medicine> {
    return diseases()
}

export {Medicine, Schnaps, loadDiseases, loadMedicines};
