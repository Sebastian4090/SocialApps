import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

it('expect to render ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
})

it('expect to render ErrorBoundry error', () => {
    const Something = () => {
        return null;
    }

    const wrapper = shallow(<ErrorBoundry ><Something /></ErrorBoundry>)
    const error = new Error('error!')
    wrapper.find(Something).simulateError(error)
    expect(wrapper.state()).toEqual({ hasError: true})
})
