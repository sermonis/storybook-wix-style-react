import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../Slider';
import Box from '../../Box';
import { Cell, Layout } from '../../Layout';

const commonProps = {
  min: 0,
  max: 10,
  value: 4,
  displayMarks: false,
  onChange: e => e,
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'displayMarks',
        props: {
          displayMarks: true,
        },
      },
      {
        it: 'step = 2',
        props: {
          step: 2,
          displayMarks: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, container }) => {
    storiesOf(`Slider${describe ? '/' + describe : ''}`, module).add(it, () => (
      <Box direction={'vertical'}>
        {[0, 4, 10].map((value, key) => (
          <Box key={key} margin={4} {...container}>
            <Layout>
              <Cell>
                <Slider {...commonProps} {...props} value={value} />
              </Cell>
            </Layout>
          </Box>
        ))}
      </Box>
    ));
  });
});
