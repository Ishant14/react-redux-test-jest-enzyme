import React from 'react';
import Headline from './index';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe("Header Component ", () => {
    test("it should render properly ", () => {
        const component = renderer.create(<Headline header="Post" desc="test"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("it should not render with no props", () => {
        const component = shallow(<Headline />);
        console.log(component.debug());
        const h1 = component.find("h1");
        
        expect(h1.length).toBe(0);
    })

    test("it should not render with no props", () => {
        const component = shallow(<Headline header="Post" desc="test"/>);
        const h1 = component.find("h1");
        expect(h1.length).toBe(1);
    })
   

})