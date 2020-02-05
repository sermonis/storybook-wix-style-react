import React from 'react';
import PropTypes from 'prop-types';
import { stub } from 'sinon';
import { mount } from 'enzyme';

import * as Utils from '../utils';
import withTooltip from './index';
import Tooltip from '../../../Tooltip';

describe('withTooltip hoc', () => {
  stub(Utils, 'getWidth');

  afterEach(() => {
    Utils.getWidth.reset();
    Utils.getWidth.resetBehavior();
  });

  afterAll(() => {
    Utils.getWidth.restore();
  });

  const type = 'compactSide';
  const item = { id: 0, title: 'Title' };

  class Component extends React.Component {
    static propTypes = {
      initHasTooltip: PropTypes.func,
    };

    render() {
      return (
        <div>
          <div ref={el => this.props.initHasTooltip(el)} />
        </div>
      );
    }
  }

  const aComponent = (props = {}) =>
    mount(
      React.createElement(withTooltip(Component), { type, item, ...props }),
    );

  it('does not add a tooltip for non compactSide types', () => {
    stubSizes({ elementSize: 10, parentSize: 100 });
    const comp = aComponent({ type: '' });
    expect(comp.find(Tooltip).exists()).toBe(false);
  });

  it('adds a tooltip if element exceeds it` parent', () => {
    stubSizes({ elementSize: 20, parentSize: 30 });
    const comp = aComponent();
    expect(comp.find(Tooltip).exists()).toBe(true);
  });

  it('does not add a tooltip if element does not exceed it`s parent', () => {
    stubSizes({ elementSize: 100, parentSize: 100 });
    const comp = aComponent();
    expect(comp.find(Tooltip).exists()).toBe(false);
  });

  it('passes props to the wrapped component', () => {
    const props = { p1: true, p2: 'true', p3: 1 };
    const comp = aComponent(props);
    expect(comp.find(Component).props()).toMatchObject(props);
  });

  function stubSizes({ elementSize, parentSize }) {
    // First render
    Utils.getWidth.onCall(0).returns(parentSize);
    Utils.getWidth.onCall(1).returns(elementSize);

    // Second render
    Utils.getWidth.onCall(2).returns(parentSize);
    Utils.getWidth.onCall(3).returns(elementSize);
  }
});
