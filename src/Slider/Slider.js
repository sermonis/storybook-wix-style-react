import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from 'rc-slider';

import { generateID } from '../utils/generateId';
import SliderHandle from './SliderHandle';
import styles from './Slider.scss';

const range = ({ min, max, step }) => {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
};

/**
 * A slider component with multi-range support
 */
export default class Slider extends Component {
  _getMarks() {
    const { min, max, step } = this.props;

    return range({ min, max, step }).reduce((acc, curr) => {
      acc[curr] = {
        label: (
          <div>
            <div className={styles.markLine} />
            <div className={styles.markValue}>
              {(curr === min || curr === max) && (
                <div className={styles.markText}>{curr}</div>
              )}
            </div>
          </div>
        ),
      };

      return acc;
    }, {});
  }

  _renderHandle = props => {
    const { displayTooltip, disabled } = this.props;

    return (
      <SliderHandle
        key={props.index}
        displayTooltip={displayTooltip}
        disabled={disabled}
        {...props}
      />
    );
  };

  _renderSlider = () => {
    const {
      pushable,
      allowCross,
      value,
      displayMarks,
      dataHook,
      id,
      ...rest
    } = this.props;
    return Array.isArray(value) && value.length > 1 ? (
      <Slide.Range
        {...rest}
        handle={this._renderHandle}
        marks={displayMarks ? this._getMarks() : {}}
        value={value}
        pushable={pushable}
        allowCros={allowCross}
      />
    ) : (
      <Slide
        {...rest}
        handle={this._renderHandle}
        marks={displayMarks ? this._getMarks() : {}}
        value={Array.isArray(value) ? value[0] : value}
      />
    );
  };

  render() {
    const { dataHook, id } = this.props;
    return (
      <div className="wix-style-react-slider" id={id} data-hook={dataHook}>
        {this._renderSlider()}
      </div>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Allows the slider's handles to cross. */
  allowCross: PropTypes.bool,

  /** Applied as data-hook HTML attribute that can be used in the tests. */
  dataHook: PropTypes.string,

  /** Controls the visibility of the marks. */
  displayMarks: PropTypes.bool,

  /** Controls visibility of slide handle tooltip */
  displayTooltip: PropTypes.bool,

  /** Applied as id HTML attribute. */
  id: PropTypes.string,

  /** The absolute maximum of the slider's range */
  max: PropTypes.number,

  /** The absolute minimum of the slider's range */
  min: PropTypes.number,

  /** Called after every value change */
  onAfterChange: PropTypes.func,

  /** Called upon every value change */
  onChange: PropTypes.func.isRequired,

  /** Adjust for RTL dir. */
  rtl: PropTypes.bool,

  /** The slider's step */
  step: PropTypes.number,

  /** Allow pushing of surrounding handles when moving a handle. Number means a minimum distance between handles */
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /** The slider's selected range */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]),

  /** Make it disabled */
  disabled: PropTypes.bool,
};

Slider.defaultProps = {
  min: 1,
  max: 20,
  step: 1,
  value: [2, 7],
  allowCross: true,
  id: generateID(),
  displayTooltip: true,
  displayMarks: true,
  rtl: false,
  disabled: false,
};
