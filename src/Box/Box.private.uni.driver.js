import { boxDriverFactory as publicDriverFactory } from './Box.uni.driver';

export const boxPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    hasChild: () => !!base.$(`[data-hook="box-child"]`),
    hasClass: className => base.hasClass(className),
    getStyle: () => base.attr('style'),
  };
};
