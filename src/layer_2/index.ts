import {loadDiseases as diseases, loadMedicines as medicines, Medicine} from '../layer_1'
import {Animal, Dog, inc} from '../layer_1b'

function loadMedicines(): Medicine[] {
    return medicines()
}

function loadDiseases(): Object[] {
    return diseases()
}

function createDog(name: string, age: number) {
    return new Dog(name, inc(age))
}

export {loadDiseases, loadMedicines, createDog};
