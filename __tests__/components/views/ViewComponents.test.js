import React from 'react';
import { mount } from 'enzyme';

import * as Views from '../../../src/components/views';
import dasherize from 'dasherize';

describe('Each View Component', () => {

  Object.keys(Views).forEach(v => {
    let Component = Views[v];
    let wrapper = mount(<Component />);

    it('Should have a dasherized class-name', () => {
      let className = '.' + dasherize(v);
      expect(wrapper.find(className).exists()).toBe(true);
    });
  });

});

