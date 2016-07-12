import {expect} from 'chai'
import {Bier} from '../layer_1'
import {loadDiseases, loadMedicines, createDog} from '../layer_2'
import {Medicine} from '../layer_1'

describe('first test', () => {
    it('should create beer', () => {
        let myBeer = new Bier('Paulaner', 5);
        expect(myBeer.getName()).to.be.a('string');
        expect(myBeer.getName()).to.equal('Paulaner');
    });

    it('should load diseases', () => {
        let diseases = loadDiseases();
        expect(diseases).to.be.have.length(3);
    });

    it('should load medicine', () => {
        let medicines = loadMedicines();
        expect(medicines).to.be.have.length(4);
        let medicine: Medicine = medicines[0];
    })

    it('should create dog', () => {
        let dog = createDog('Wuffi', 10);
        expect(dog.getName()).to.equal('Wuffi');
        expect(dog.getAge()).to.equal(11);
    })
});
