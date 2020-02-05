import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { sideMenuUniDriverFactory } from '../core/SideMenu.uni.driver';

export const drillViewUniDriverFactory = (base, body) => {
  const createMenuDriver = menuElement =>
    sideMenuUniDriverFactory(menuElement, body);
  const getMenu = () => base.$('.drillViewContainer');

  return {
    ...baseUniDriverFactory(base),
    getMenuDriver: () => createMenuDriver(getMenu()),
    getStickyFooter: () => base.$('[data-hook=menu-footer]'),
  };
};
