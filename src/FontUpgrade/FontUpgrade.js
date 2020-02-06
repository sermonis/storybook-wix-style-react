import React from 'react';
import createReactContext from 'create-react-context';
import styles from './FontUpgrade.css';

const Context = createReactContext({});

export const FontUpgrade = ({ active = true, children }) => {
  return (
    <Context.Provider value={{ active }}>
      <span className={active ? styles.root : null} children={children} />
    </Context.Provider>
  );
};

export const FontUpgradeContext = Context.Consumer;
