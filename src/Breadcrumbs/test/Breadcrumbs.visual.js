import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from '../Breadcrumbs';
import Box from 'wix-style-react/Box';
import { SIZES, THEMES } from '../constnats';
import { breadcrumbsTestkitFactory } from '../../../testkit';

const sizes = Object.values(SIZES);

const test = (it, props) => ({ it, props });

const items = [
  { id: 1, value: 'first item' },
  { id: 2, value: 'second item' },
  { id: 3, value: 'third item' },
];

const itemsWithLinks = [
  { id: 1, value: 'Wix', link: 'http://www.wix.com' },
  {
    id: 2,
    value: 'Google',
    customElement: (
      <a
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        href="http://www.google.com"
      >
        Google
      </a>
    ),
  },
  { id: 3, value: 'Yahoo', link: 'http://www.yahoo.com' },
];

const tests = [
  {
    describe: 'Standard',
    its: [
      {
        it: 'without links',
        props: { items },
      },
      {
        it: 'with links',
        props: { items: itemsWithLinks },
      },
    ],
  },
  {
    describe: 'Sizes',
    its: sizes.map(size => test(size, { size })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Breadcrumbs${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <Breadcrumbs items={items} {...props} />,
    );
  });
});

const breadcrumbsWithBoxWrapper = [
  { boxBackground: 'D10', theme: THEMES.onDarkBackground },
  { boxBackground: 'D80', theme: THEMES.onWhiteBackground },
  { boxBackground: 'D70', theme: THEMES.onGrayBackground },
];

breadcrumbsWithBoxWrapper.forEach(({ theme, boxBackground }) => {
  storiesOf(`Breadcrumbs/Themes`, module).add(theme, () => (
    <Box backgroundColor={boxBackground} width="400px" padding="10px">
      <Breadcrumbs items={items} theme={theme} />
    </Box>
  ));
});

const interactiveDataHook = 'interactive-breadcrumbs';

const createDriver = dataHook =>
  breadcrumbsTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  state = { activeId: 2 };

  async componentDidMount() {
    this.props.componentDidMount();
  }

  onClick = ({ id }) => this.setState({ activeId: id });

  render() {
    const { items } = this.props;
    const { activeId } = this.state;
    return (
      <Breadcrumbs
        dataHook={interactiveDataHook}
        items={items}
        activeId={activeId}
        onClick={this.onClick}
      />
    );
  }
}

const interactiveTests = [
  {
    describe: 'Active item',
    its: [
      {
        it: 'should be in bold once clicked upon',
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.clickBreadcrumbAt(0);
        },
        props: { items },
      },
    ],
  },
];

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`Breadcrumbs${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
      ),
    );
  });
});
