import {expect} from 'chai'
import {Bier} from '../layer_1'
import {loadDiseases, loadMedicines, createDog} from '../layer_2'
import {Medicine} from '../layer_1'
import {getElefants} from '../layer_1/pureJS'

describe('first test', () => {
    it('should create beer', () => {
        const myBeer = new Bier('Paulaner', 5);
        expect(myBeer.getName()).to.be.a('string');
        expect(myBeer.getName()).to.equal('Paulaner');
    });

    it('should load diseases', () => {
        const diseases = loadDiseases();
        expect(diseases).to.be.have.length(3);
    });

    it('should load medicine', () => {
        const medicines = loadMedicines();
        expect(medicines).to.be.have.length(4);
        const medicine: Medicine = medicines[0];
    })

    it('should create dog', () => {
        const dog = createDog('Wuffi', 10);
        expect(dog.getName()).to.equal('Wuffi');
        expect(dog.getAge()).to.equal(11);
    })

    it('should get elephants', () => {
        const elephants = getElefants();
        expect(elephants).to.be.have.length(1);
        expect(elephants[0].name).to.equal('Susy');
        expect(elephants[0].weight).to.equal(1000);
    })
});
