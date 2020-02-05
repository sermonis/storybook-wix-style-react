import React from 'react';
import IconButton from '../../IconButton';
import Tooltip from '../../Tooltip';
import Text from '../../Text';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import { arrowsDirection, dataHooks } from '../constants';
import styles from '../ModalPreviewLayout.st.css';
import classNames from 'classnames';

const iconButtonArrow = {
  [arrowsDirection.rightArrow]: <ChevronRight />,
  [arrowsDirection.leftArrow]: <ChevronLeft />,
};

const tooltipProps = {
  [arrowsDirection.rightArrow]: {
    dataHook: dataHooks.nextNavigationButtonTooltip,
    className: styles.modalTooltip,
    upgrade: true,
    appendTo: 'scrollParent',
    content: <Text children="Next" />,
    placement: 'right',
  },
  [arrowsDirection.leftArrow]: {
    dataHook: dataHooks.prevNavigationButtonTooltip,
    className: styles.modalTooltip,
    upgrade: true,
    appendTo: 'scrollParent',
    content: <Text children="Previous" />,
    placement: 'left',
  },
};

const NavigationButton = ({ direction, ...props }) => (
  <div className={classNames(styles.navigationButton, styles[direction])}>
    <Tooltip {...tooltipProps[direction]}>
      <IconButton as="button" skin="transparent" {...props}>
        {iconButtonArrow[direction]}
      </IconButton>
    </Tooltip>
  </div>
);

export default NavigationButton;
