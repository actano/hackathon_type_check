import {loadDiseases as diseases, loadMedicines as medicines, Medicine} from '../layer_1'

function loadMedicines(): Medicine[] {
    return medicines()
}

function loadDiseases(): Object[] {
    return diseases()
}

export {loadDiseases, loadMedicines};
