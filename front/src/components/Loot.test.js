import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

Enzyme.configure({ adapter: new Adapter() });
Enzyme.configure({ disableLifecycleMethods: true });

describe('Loot', () => {
    const mockFetchBitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin }
    let loot = Enzyme.shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            loot = Enzyme.mount((<Loot {...props} />));
        });

        it('dispatches the fetchBitcoin() method it recieves from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    })
});