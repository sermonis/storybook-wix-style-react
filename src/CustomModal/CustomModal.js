import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Heading from '../Heading';
import Button from '../Button';
import styles from './CustomModal.st.css';
import { dataHooks } from './constants';
import { children } from '../Composite';
import { sideActions } from '../MessageBox/FunctionalLayout/docs/examples';
import CloseButton from '../CloseButton';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    dataHook: PropTypes.string,
    primaryButtonText: PropTypes.string,
    primaryButtonProps: PropTypes.object,
    secondaryButtonText: PropTypes.string,
    secondaryButtonProps: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    removeContentPadding: PropTypes.bool,
    footer: PropTypes.node,
    sideActions: PropTypes.node,
    children: PropTypes.any,
  };

  static defaultProps = {
    dataHook: dataHooks.customModal,
    primaryButtonText: 'Confirm',
    primaryButtonProps: { dataHook: dataHooks.primaryButton },
    secondaryButtonText: 'Cancel',
    secondaryButtonProps: { dataHook: dataHooks.secondaryButton },
    title: '',
    subtitle: '',
    removeContentPadding: false,
  };

  // state = {
  //   count: 0,
  // };
  //
  // _handleClick = () => {
  //   this.setState(({ count }) => ({
  //     count: count + 1,
  //   }));
  // };

  render() {
    // const { count } = this.state;
    const {
      dataHook,
      primaryButtonText,
      primaryButtonProps,
      secondaryButtonText,
      secondaryButtonProps,
      title,
      subtitle,
      primaryButtonOnClick,
      secondaryButtonOnClick,
      removeContentPadding,
      children,
      sideActions,
      footer,
      onClose,
    } = this.props;

    // TODO - how to implement this the right way?
    const classes =
      'root' + removeContentPadding ? ' removeContentPadding' : '';

    return (
      <div {...styles(classes, {}, this.props)} data-hook={dataHook}>
        <Heading dataHook={dataHooks.title} appearance={'H3'}>
          {title}
        </Heading>
        <Text dataHook={dataHooks.subtitle}>{subtitle}</Text>
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.actions}>
          <div className={styles.sideActions}>{sideActions}</div>
          <div className={styles.buttons}>
            <Button
              dataHook={dataHooks.secondaryButton}
              onClick={secondaryButtonOnClick}
              {...secondaryButtonProps}
            >
              {secondaryButtonText}
            </Button>
            <Button
              dataHook={dataHooks.primaryButton}
              onClick={primaryButtonOnClick}
              {...primaryButtonProps}
            >
              {primaryButtonText}
            </Button>
          </div>
        </div>
        <div className={styles.footer}>{footer}</div>
        <CloseButton
          dataHook={dataHooks.closeButton}
          className={styles.closeButton}
          onClick={onClose}
        />
      </div>
    );
  }
}

export default CustomModal;
