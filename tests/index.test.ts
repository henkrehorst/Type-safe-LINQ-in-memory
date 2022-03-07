import {expect} from "chai";
import {timesTwo} from "../src";

describe('Check check', () => {
    it('check', () => {
        expect(timesTwo(2)).to.equal(4)
    })
})