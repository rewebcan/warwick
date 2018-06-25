import {Warwick} from '../../warwick/warwick';
import {config} from '../helpers/config';
import {expect} from 'chai';
import 'mocha';

describe('should initialize an instance from given config', () => {
    it('initiate an instance with given config', (assert) => {
        const ww = new Warwick(config);
        expect(ww).to.be.an('object');
    })
})