import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import InputArea from '..';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleError from './ExampleError';
import ExampleErrorRaw from '!raw-loader!./ExampleError';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

import ExampleRefs from './ExampleRefs';
import ExampleRefsRaw from '!raw-loader!./ExampleRefs';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw-loader!./ExampleSizes';

import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: InputArea,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    error: false,
    theme: 'normal',
    hasCounter: false,
    resizable: false,
    disabled: false,
  },

  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard />
      </CodeExample>

      <CodeExample title="Error" code={ExampleErrorRaw}>
        <ExampleError />
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled />
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes />
      </CodeExample>

      <CodeExample title="Commands test" code={ExampleRefsRaw}>
        <ExampleRefs />
      </CodeExample>
    </div>
  ),
};
