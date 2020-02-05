import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import LinkTo from '@storybook/addon-links/react';
import Box from 'wix-style-react/Box';

import ModalPreviewLayout from '..';
import { storySettings } from '../test/storySettings';
import { ModalWrapperExample } from './examples/ModalWrapper';
import SimpleExample from '!raw-loader!./examples/Simple';
import FullWidthContentExample from '!raw-loader!./examples/FullWidthContent';
import ScrollableContentExample from '!raw-loader!./examples/ScrollableContent';
import MultipleContentExample from '!raw-loader!./examples/MultipleContent';
import allComponents from '../../../stories/utils/allComponents';
import { Category } from '../../../stories/storiesHierarchy';

const code = config => baseCode({ components: allComponents, ...config });

const childrenNodesExamples = [
  {
    label: 'Single child node',
    value: (
      <Box
        width="90vw"
        height="100%"
        align="center"
        verticalAlign="middle"
        backgroundColor="D80"
        children="This is the content!"
      />
    ),
  },
  {
    label: 'Multiple child nodes',
    value: ['first', 'second', 'third'].map(ordinalNum => (
      <Box
        width="90vw"
        height="100%"
        align="center"
        verticalAlign="middle"
        backgroundColor="D80"
        children={`This is the ${ordinalNum} content page`}
      />
    )),
  },
];

export default {
  category: storySettings.category,
  storyName: 'ModalPreviewLayout',

  component: ModalPreviewLayout,
  componentPath: '..',
  componentWrapper: ({ component }) => (
    <ModalWrapperExample>
      {({ onClose }) => React.cloneElement(component, { onClose })}
    </ModalWrapperExample>
  ),
  componentProps: {
    title: 'Basic Website Design',
    children: childrenNodesExamples[0].value,
    shouldCloseOnOverlayClick: true,
    onClose: () => null,
  },

  exampleProps: {
    children: childrenNodesExamples,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ModalPreviewLayout/',
    }),
    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: [
                'Use this component together with ',
                <LinkTo
                  kind={Category.COMPONENTS}
                  story="Modal"
                >{`<Modal />`}</LinkTo>,
                ' to display content in preview mode. In the header strip you may place a title and/or a button strip with actions relevant to the displayed content.',
              ],
            }),
          ]),

          columns([
            importExample(
              "import ModalPreviewLayout from 'wix-style-react/ModalPreviewLayout';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text:
                'A simple example for preview layout modal with title, actions and inner content',
            }),

            code({
              compact: true,
              source: SimpleExample,
            }),
          ]),

          columns([
            description({
              title: 'Example with Full-Width Content',
              text:
                'An example for preview layout modal with title, actions and content that takes the full width',
            }),

            code({
              compact: true,
              source: FullWidthContentExample,
            }),
          ]),

          columns([
            description({
              title: 'Example with Scrollable Content',
              text:
                'An example for preview layout modal with title, actions and content that overflows the height',
            }),

            code({
              compact: true,
              source: ScrollableContentExample,
            }),
          ]),

          columns([
            description({
              title: 'Example with Multiple Content',
              text:
                'An example for preview layout modal with title, actions and multiple content',
            }),

            code({
              compact: true,
              source: MultipleContentExample,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
