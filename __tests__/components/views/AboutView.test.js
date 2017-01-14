import React from 'react';
import { mount } from 'enzyme';

import { AboutView } from '../../../src/components/views';

describe('AboutView Component', () => {

  let wrapper;

  // Mount the component before each test in case we modify it
  beforeEach(() => {
    wrapper = mount(
      <AboutView />
    );
  });

  it('Renders "About Us!" text', () => {
    expect(wrapper.find('h1').text()).toEqual('About Us!');
  });

});
