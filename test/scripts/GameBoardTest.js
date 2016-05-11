import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GameBoard from '../../scripts/GameBoard';


describe('<GameBoard />', () => {
  it('should render a <GameBoard />', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.length).to.equal(1);
  });
});
