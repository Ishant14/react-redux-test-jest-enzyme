import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe("Header Component ", () => {
    test("it should render properly ", () => {
        const component = renderer.create(<Header/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("it should have  ", () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.wrap');
        expect(wrapper.length).toBe(1);
    })

})