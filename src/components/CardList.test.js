import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockSocials = [
        {
            id : 1,
            name : 'test',
            domain: 'testSite',
            link: 'test.pl'

        }
    ]

    expect(shallow(<CardList socials={mockSocials}/>)).toMatchSnapshot()
})