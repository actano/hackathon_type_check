/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import {expect} from 'chai'
import {Beer} from '../layer_1'

describe('first test', () => {
    it('should load diseases', () => {
        let myBeer = new Beer('Paulaner', 5);
        expect(myBeer.getName()).to.be.a('string');
        expect(myBeer.getName()).to.equal('Paulaner');
    })
});
