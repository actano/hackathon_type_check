const { expect } = require('chai');
const { loadDiseases } = require('../layer_1');

describe('first test', () => {
    it('should load diseases', () => {
        result = loadDiseases();
        console.log(result);
        expect(result).to.be.a.array;
    });
});