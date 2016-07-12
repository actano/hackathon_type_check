// @flow

const {expect} = require('chai')
const {loadDiseases, SickManager} = require('../layer_1')

describe('first test', () => {
    it('should load diseases', () => {
        const result = loadDiseases()
        console.log(result)
        expect(result).to.be.a.array

        const sick = new SickManager('s', 'h')
        sick.greet()
        console.log(sick);

    })
})
