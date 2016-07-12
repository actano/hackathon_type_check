

class BasicManager {
    constructor(name = '') {
        this.name = name;
    }

    greet() {
        console.log('Hello guys, I\'m ' + this.name);
    }
}

class MusicManager extends BasicManager {
    greet() {
        console.log('lalalala');
        super.greet();
        console.log('lalalala');
    }
}

class SickManager extends BasicManager {
    constructor(name = '', disease = '') {
        super(name);
        this.disease = disease;
    }
    greet() {
        super.greet();
        console.log('höhö, I have severe ' + this.disease);
    }
}

class Medicine {
    constructor(name = '') {
        this.name = name;
    }

    use() {
        console.log('Using ' + this.name);
    }
}

class Beer extends Medicine {
    constructor(name, percentage) {
        super(name);
        this.percentage = percentage;
    }

    use() {
        console.log('Drinking ' + this.name + '... Hmm, it has ' + this.percentage + '%!');
    }
}

const medicinesList = [new Medicine('Aspirin'), new Medicine('Tea'), new Medicine('Placebo'), new Beer('Berliner Weisse', 3)];
const diseasesList = [{ name: 'ebola', deadly: true }, { name: 'influenca', deadly: false }, { name: 'aids', deadly: true }];

const store = {
    diseases: diseasesList,
    medicines: medicinesList
};

function loadDiseases() {
    return store.diseases;
}

function loadMedicins() {
    return store.medicines;
}

module.exports = {
    Medicine,
    Beer,
    loadDiseases,
    loadMedicins,
    MusicManager,
    SickManager
};