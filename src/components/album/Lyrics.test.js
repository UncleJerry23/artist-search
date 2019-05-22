import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Lyrics lyrics='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
