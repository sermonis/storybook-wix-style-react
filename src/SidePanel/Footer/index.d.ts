import * as React from 'react';

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  showDivider?: boolean;
}

export default class Footer extends React.PureComponent<FooterProps> {}
