import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
    const mockChange = 'a';
    expect(shallow(<SearchBox searchChange={mockChange}/>)).toMatchSnapshot()
})