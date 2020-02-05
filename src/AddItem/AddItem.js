import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import AddItemLarge from 'wix-ui-icons-common/system/AddItemLarge';
import AddItemMedium from 'wix-ui-icons-common/system/AddItemMedium';
import AddItemSmall from 'wix-ui-icons-common/system/AddItemSmall';
import Add from 'wix-ui-icons-common/Add';

import Tooltip from '../Tooltip';
import Text from '../Text';
import TooltipHOC from './components/TooltipHOC';
import AddMedia from 'wix-ui-icons-common/system/AddMedia';
import { dataHooks } from './constants';

import style from './AddItem.st.css';

const ICONS = {
  large: <AddItemLarge />,
  medium: <AddItemMedium />,
  small: <AddItemSmall />,
  tiny: <Add width="26" height="26" style={{ flexShrink: 0 }} />,
  custom: <AddMedia width="31" height="31" />,
};

class AddItem extends Component {
  static displayName = 'AddItem';
  static propTypes = {
    /** any renderable node */
    children: PropTypes.node,

    /** apply disabled styles */
    disabled: PropTypes.bool,

    /** the theme of component */
    theme: PropTypes.oneOf(['dashes', 'plain', 'filled', 'image']),

    /** switching content alignment  */
    alignItems: PropTypes.oneOf(['center', 'right', 'left']),

    /** size to control icon and spacing  */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']),

    /** click event handler  */
    onClick: PropTypes.func,

    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** @deprecated do not use this prop. Check for other available props. */
    tooltipProps: PropTypes.shape(Tooltip.propTypes),

    /** tooltips content relation to a dom element */
    tooltipAppendTo: PropTypes.oneOf([
      'window',
      'scrollParent',
      'viewport',
      'parent',
    ]),

    /** whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
    tooltipFlip: PropTypes.bool,

    /** whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
    tooltipFixed: PropTypes.bool,

    /** Content of the tooltip, leave undefined for no tooltip */
    tooltipContent: PropTypes.string,

    /** tooltip content placement in relation to target element */
    tooltipPlacement: PropTypes.string,

    /** Displays the plus icon */
    showIcon: PropTypes.bool,

    /** Removes padding */
    removePadding: PropTypes.bool,
  };

  static defaultProps = {
    theme: 'dashes',
    size: 'tiny',
    alignItems: 'center',
    showIcon: true,
    removePadding: false,
  };

  _renderIcon = () => {
    const { size, theme } = this.props;

    const image = theme === 'image';
    const iconElement = ICONS[image ? 'custom' : size];

    return iconElement;
  };

  _renderText = () => {
    const { children, theme, size } = this.props;

    if (!children || theme === 'image') {
      return null;
    }

    const textSize = size === 'tiny' ? 'small' : 'medium';

    return (
      <div {...style('text', { size })}>
        <Text
          weight="thin"
          size={textSize}
          dataHook={dataHooks.itemText}
          ellipsis
        >
          {children}
        </Text>
      </div>
    );
  };

  _renderContent = () => {
    const {
      theme,
      alignItems,
      size,
      disabled,
      showIcon,
      tooltipContent,
    } = this.props;

    const container = (
      <div {...style('content', { theme, size, alignItems, disabled })}>
        {showIcon && this._renderIcon()}
        {this._renderText()}
      </div>
    );
    return (
      <TooltipHOC
        enabled={theme === 'image' && tooltipContent !== ''}
        {...this.props}
      >
        {container}
      </TooltipHOC>
    );
  };

  render() {
    const {
      dataHook,
      onClick,
      disabled,
      theme,
      focusableOnFocus,
      focusableOnBlur,
      removePadding,
    } = this.props;

    return (
      <button
        {...style('root', { theme, removePadding }, this.props)}
        data-hook={dataHook}
        disabled={disabled}
        type="button"
        onClick={onClick}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
      >
        {this._renderContent()}
      </button>
    );
  }
}
export default withFocusable(AddItem);
