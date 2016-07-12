// @flow

class BasicManager {
    name: string;
    constructor (name: string = '') {
        this.name = name;
    }

    greet (): void {
        console.log('Hello guys, I\'m ' + this.name);
    }
}

class MusicManager extends BasicManager {
    greet (): void {
        console.log('lalalala');
        super.greet();
        console.log('lalalala');
    }
}

class SickManager extends BasicManager {
    disease: string
    constructor (name: string = '', disease: string = '') {
        super(name);
        this.disease = disease;
    }
    greet () {
        super.greet();
        console.log('höhö, I have severe ' + this.disease);
    }
}

class Medicine {
    constructor (name: string = '') {
        this.name = name;
    }

    use (): void {
        console.log('Using ' + this.name);
    }
}

class Beer extends Medicine {
    constructor (name, percentage) {
        super(name)
        this.percentage = percentage
    }

    use() {
        console.log('Drinking ' + this.name + '... Hmm, it has ' + this.percentage + '%!');
    }
}


store = {
    diseases: [{name: 'ebola', deadly: true}, {name: 'influenca', deadly: false}, {name: 'aids', deadly: true}],
    medicines: [new Medicine('Aspirin'), new Medicine('Tea'), new Medicine('Placebo'), new Beer('Berliner Weisse', 3)]
}

function loadDiseases() {
    return store.diseases
}

function loadMedicins() {
    return store.medicines
}

module.exports = {
    Medicine,
    Beer,
    loadDiseases,
    loadMedicins,
    MusicManager,
    SickManager
}
