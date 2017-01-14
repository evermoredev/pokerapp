import React from 'react';
import { mount } from 'enzyme';

import { NotFoundView } from '../../../src/components/views';

describe('NotFoundView Component', () => {

  let wrapper;

  // Mount the component before each test in case we modify it
  beforeEach(() => {
    wrapper = mount(
      <NotFoundView />
    );
  });

  it('Renders "404: Not Found!" text', () => {
    expect(wrapper.find('h1').text()).toEqual('404: Not Found!');
  });

});
