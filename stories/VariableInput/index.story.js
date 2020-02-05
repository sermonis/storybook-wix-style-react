import React from 'react';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title as sectionTitle,
  description,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import VariableInput from 'wix-style-react/VariableInput';
import FormField from 'wix-style-react/FormField';
import { Category } from '../storiesHierarchy';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Variable Input">
            <VariableInput
              placeholder="Placeholder"
              initialValue="VariableInput will render known variables as {{page.name}} tags"
              variableParser={value =>
                value === 'page.name' ? 'Page name' : false
              }
            />
          </FormField>
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    columns([
      description({
        title: 'Description',
        text: `Variable Input enables the user to insert given tags (variables) as well as free text inside an input. This component can be used to build various forms.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="TextButton"
            >{`<TextButton/>`}</LinkTo>,
            'Component to trigger the action',
          ],
          [
            <LinkTo
              kind={Category.BETA}
              story="PopoverMenu"
            >{`<PopoverMenu/>`}</LinkTo>,
            'Component to insert new variables',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="VariableInput"
            >{`<VariableInput/>`}</LinkTo>,
            'Component that receives data',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    sectionTitle('Examples'),

    ...[
      {
        title: 'Size',
        text: 'Variable Input supports 3 sizes',
        source: examples.sizes,
      },
      {
        title: 'Action',
        text:
          'Click the action to add additional Variable to the input field, at cursor position',
        source: examples.action,
      },
      {
        title: 'Additional Info',
        text: 'With and without Additional Info',
        source: examples.info,
      },
      {
        title: 'Required',
        text: 'With and without required',
        source: examples.required,
      },
      {
        title: 'Label Position',
        text: 'Configure the label placement',
        source: examples.labelPlacement,
      },
    ].map(({ title, text, source }) =>
      columns([description({ title, text }), code({ source })]),
    ),
  ],
};
