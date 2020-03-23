import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitocinReducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index'};

    it('fetches and sets the bitcoin data', () => {
        expect(bitcoinReducer({}, {type: FETCH_BITCOIN, bitcoin: bitcoinData}))
        .toEqual(bitcoinData);
    });
});