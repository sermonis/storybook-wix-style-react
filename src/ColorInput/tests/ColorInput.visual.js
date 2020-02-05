import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorInput from '../ColorInput';
import { Layout } from '../../Layout';

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const tests = [
  {
    describe: 'ColorInput',
    its: [
      {
        it: 'ColorInput states',
        props: {
          storyFunction: () => (
            <TestContainer>
              <div style={{ margin: '10px', width: '50%' }}>
                <Layout>
                  <ColorInput value="#FF0000" size="large" />
                  <ColorInput value="#FF0000" size="medium" />
                  <ColorInput value="#FF0000" size="small" />
                </Layout>
              </div>
              <div style={{ margin: '10px', width: '50%' }}>
                <Layout>
                  <ColorInput value="#FF0000" error />
                  <ColorInput value="" />
                  <ColorInput value="#FF0000" disabled />
                </Layout>
              </div>
            </TestContainer>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ColorInput${describe ? '/' + describe : ''}`, module).add(
      it,
      props.storyFunction,
    );
  });
});
