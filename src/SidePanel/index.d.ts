import * as React from 'react';

export interface SidePanelProps {
  dataHook?: string;
  buttonText?: string;
  className?: string;
  onCloseButtonClick?: () => Promise<any>;
  children?: React.ReactNode;
}

export default class SidePanel extends React.PureComponent<SidePanelProps> {}
