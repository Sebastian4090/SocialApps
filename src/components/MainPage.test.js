import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockSocials = [];
    const mockText = '';
    const mockOnSearchChange = jest.fn();

    wrapper = shallow(<MainPage socials={mockSocials} 
                                text={mockText} 
                                onSearchChange={mockOnSearchChange}
                                />);
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});