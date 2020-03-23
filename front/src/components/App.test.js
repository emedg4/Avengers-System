import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    const app = Enzyme.shallow(<App />);
    it('render properly', () => {
        expect(app).toMatchSnapshot();
    })

    it('contains a connceted Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
});