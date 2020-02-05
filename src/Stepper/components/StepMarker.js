import React from 'react';
import Confirm from 'wix-ui-icons-common/Confirm';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import StatusAlertFilled from 'wix-ui-icons-common/StatusAlertFilled';

import { Type, StepType } from '../constants';
import styles from './StepMarker.st.css';

const StepMarker = ({
  number,
  active,
  type,
  styleType,
  hovered,
  disabled,
  ...otherProps
}) => {
  const renderCompleted = () => <Confirm />;
  const renderNumber = () => `${number}${styleType === Type.Text ? '.' : ''}`;
  const renderError = () =>
    styleType === Type.Text ? (
      <StatusAlertFilled />
    ) : (
      <FormFieldErrorSmall size="12px" />
    );

  return (
    <div
      {...styles(
        'root',
        {
          type,
          styleType,
          selected: active,
          hovered,
        },
        otherProps,
      )}
    >
      {type === StepType.Error
        ? renderError()
        : type === StepType.Completed
        ? renderCompleted()
        : renderNumber()}
    </div>
  );
};

export default StepMarker;
