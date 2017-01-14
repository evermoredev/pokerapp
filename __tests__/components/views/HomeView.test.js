import React from 'react';
import { mount } from 'enzyme';

import { HomeView } from '../../../src/components/views';

describe('HomeView Component', () => {

  let wrapper;

  // Mount the component before each test in case we modify it
  beforeEach(() => {
    wrapper = mount(
      <HomeView />
    );
  });

  it('Renders "Welcome Home!" text', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome Home!');
  });

});
