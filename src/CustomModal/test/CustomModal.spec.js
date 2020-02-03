import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CustomModal from '../CustomModal';
import { customModalPrivateDriverFactory } from './CustomModal.private.uni.driver';
import { dataHooks } from '../constants';
import styles from '../CustomModal.st.css';
import Checkbox from '../../Checkbox';

describe('CustomModal', () => {
  const render = createRendererWithUniDriver(customModalPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<CustomModal />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
    expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
  });
  it('should render children', async () => {
    const children = <div data-hook="child">Child div</div>;
    const { driver } = render(<CustomModal>{children}</CustomModal>);

    expect(await driver.childExists('[data-hook=child]')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(<CustomModal className={expectedClass} />);

    expect(await driver.hasClass(expectedClass)).toBe(true);
  });
  it('should receive styles from props', async () => {
    const { driver } = render(<CustomModal removeContentPadding />);
    expect(await driver.hasClass(styles.removeContentPadding)).toBe(true);
  });

  it('should render title & subtitle', async () => {
    const title = 'Modal Title';
    const subtitle = 'Subtitle here';
    const { driver } = render(
      <CustomModal title={title} subtitle={subtitle} />,
    );

    expect(await driver.getTitleText()).toEqual(title);
    expect(await driver.getSubtitleText()).toEqual(subtitle);
  });
  it('should click on the primary and secondary action buttons', async () => {
    const props = {
      primaryButtonOnClick: jest.fn(),
      secondaryButtonOnClick: jest.fn(),
    };
    const { driver } = render(<CustomModal {...props} />);

    await driver.clickPrimaryButton();
    await driver.clickSecondaryButton();

    expect(props.primaryButtonOnClick).toHaveBeenCalledTimes(1);
    expect(props.secondaryButtonOnClick).toHaveBeenCalledTimes(1);
  });
  it('should click on the close button', async () => {
    const props = {
      onClose: jest.fn(),
    };
    const { driver } = render(<CustomModal {...props} />);

    await driver.clickCloseButton();

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should allow changing the buttons text', async () => {
    const { driver } = render(
      <CustomModal
        primaryButtonText="Press me"
        primaryButtonProps={{ dataHook: dataHooks.primaryButton }}
        secondaryButtonText="Don't press me"
        secondaryButtonProps={{ dataHook: dataHooks.secondaryButton }}
      />,
    );

    expect(await driver.getPrimaryButtonText()).toEqual('Press me');
    expect(await driver.getSecondaryButtonText()).toEqual("Don't press me");
  });

  it(`should render 'sideActions'`, async () => {
    const dataHook = 'sideActions';
    const selector = '[data-hook="' + dataHook + '"]';
    const sideActions = (
      <div data-hook={dataHook}>
        <Checkbox>Check this</Checkbox>
      </div>
    );
    const { driver } = render(<CustomModal sideActions={sideActions} />);

    expect(await driver.childExists(selector)).toBe(true);
  });
  it(`should render 'footer'`, async () => {
    const dataHook = 'footer';
    const selector = '[data-hook="' + dataHook + '"]';
    const footer = <div data-hook={dataHook}>Footer here</div>;
    const { driver } = render(<CustomModal footer={footer} />);

    expect(await driver.childExists(selector)).toBe(true);
  });
});
