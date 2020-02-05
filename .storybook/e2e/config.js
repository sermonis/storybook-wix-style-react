import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { version } from '../../package.json';

function loadStories() {
  if (global.self === global.top) {
    require('./e2e-styles.scss');
  }

  require('./stories.scss');
  require('../../stories/e2e');
}

configure(loadStories, module);

setOptions({
  showAddonPanel: false,
  name: `wix-style-react v${version}`,
  url: 'https://github.com/wix/wix-style-react',
  sidebarAnimations: false,
  showDownPanel: false,
});
