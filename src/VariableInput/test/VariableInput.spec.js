import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { createRendererWithUniDriver } from '../../../test/utils/react';
import publicDriverFactory from '../VariableInput.uni.driver';
import privateDriverFactory from './VariableInput.private.uni.driver';
import VariableInput from '../VariableInput';
import { sizeTypes } from '../constants';

describe('VariableInput', () => {
  const createDriver = createUniDriverFactory(privateDriverFactory);
  const variableEntity = {
    text: 'Page name',
    value: 'page.name',
  };
  const variableParser = value =>
    value === variableEntity.value ? variableEntity.text : false;

  describe('initialValue', () => {
    it('should render the text when `initialValue` prop is plain text', async () => {
      const text = 'Some text';
      const driver = createDriver(
        <VariableInput initialValue={text} variableParser={variableParser} />,
      );
      expect(await driver.exists()).toBe(true);
      expect(await driver.getContent()).toBe(text);
    });
  });
  describe('variableParser', () => {
    it('should render the text when `initialValue` prop contains valid variables', async () => {
      const driver = createDriver(
        <VariableInput
          initialValue={`hello world {{page.name}}`}
          variableParser={variableParser}
        />,
      );
      expect(await driver.getContent()).toBe('hello world  Page name ');
    });
    it('should keep text as is if variable not valid in the parser', async () => {
      const driver = createDriver(
        <VariableInput
          initialValue={`hello world {{test.val}}`}
          variableParser={variableParser}
        />,
      );
      expect(await driver.getContent()).toBe('hello world {{test.val}}');
    });
  });
  describe('insertVariable', () => {
    it('should invoke `onSubmit` with variable after insert variable', async () => {
      const text = 'Some text';
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.insertVariable(text);
      expect(await driver.getContent()).toBe(` ${text}  `);
    });
  });
  describe('setValue', () => {
    it('should update text while using `setValue`', async () => {
      const text = 'Some text';
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(`${text}`);
    });
  });
  describe('onSubmit', () => {
    it('should invoke `onSubmit` with variable after `insertVariable`', async () => {
      const callback = jest.fn();
      const text = 'Some text';
      const expectedHtmlValue = `{{${text}}} `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.insertVariable(text);
      expect(await driver.getContent()).toBe(` ${text}  `);
      expect(callback).toHaveBeenCalledWith(expectedHtmlValue);
    });
    it('should invoke `onSubmit` with variable after `setValue`', async () => {
      const callback = jest.fn();
      const text = 'Some text {{page.name}}';
      const expectedHtmlValue = `Some text  Page name `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          variableParser={variableParser}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(expectedHtmlValue);
      expect(callback).toHaveBeenCalledWith(text);
    });
    it('should not invoke `onSubmit` while typing', async () => {
      const callback = jest.fn();
      const text = 'Some text {{page.name}}';

      const driver = createDriver(
        <VariableInput onSubmit={callback} variableParser={variableParser} />,
      );
      driver.enterText(text);

      expect(callback).not.toHaveBeenCalled();
    });
  });
  describe('variableTemplate', () => {
    it('should render the text when `initialValue` prop is plain text', async () => {
      const callback = jest.fn();
      const text = 'Some text $(page.name)';
      const expectedHtmlValue = `Some text  Page name `;
      let myRef = null;
      const driver = createDriver(
        <VariableInput
          onSubmit={callback}
          variableParser={variableParser}
          variableTemplate={{ prefix: '$(', suffix: ')' }}
          ref={ref => {
            myRef = ref;
          }}
        />,
      );
      expect(await driver.getContent()).toBe('');
      myRef.setValue(text);
      expect(await driver.getContent()).toBe(expectedHtmlValue);
      expect(callback).toHaveBeenCalledWith(text);
    });
  });
  describe('Error', () => {
    it('should render the error indicator', async () => {
      const driver = createDriver(<VariableInput status="error" />);
      expect(await driver.hasError()).toBe(true);
    });

    it('should render a tooltip with the error message', async () => {
      const errorMessage = 'Some error';
      const render = createRendererWithUniDriver(publicDriverFactory);
      const { driver } = render(
        <VariableInput status="error" statusMessage={errorMessage} />,
      );

      expect(await driver.hasError()).toBe(true);
      expect(await driver.getErrorMessage()).toEqual(errorMessage);
    });
  });
  describe('Warning', () => {
    it('should render the warning indicator', async () => {
      const driver = createDriver(<VariableInput status="warning" />);
      expect(await driver.hasWarning()).toBe(true);
    });

    it('should render a tooltip with the error message', async () => {
      const warningMessage = 'Some warning';
      const render = createRendererWithUniDriver(publicDriverFactory);
      const { driver } = render(
        <VariableInput status="warning" statusMessage={warningMessage} />,
      );

      expect(await driver.hasWarning()).toBe(true);
      expect(await driver.getWarningMessage()).toEqual(warningMessage);
    });
  });
  describe('size', () => {
    it('should render a tag in small size', async () => {
      const text = `Some text {{${variableEntity.value}}} `;
      const driver = createDriver(
        <VariableInput
          initialValue={text}
          size={sizeTypes.small}
          variableParser={variableParser}
        />,
      );
      expect(driver.isTagTiny()).toBeTruthy();
    });
    it('should render a tag in medium size', async () => {
      const text = `Some text {{${variableEntity.value}}} `;
      const driver = createDriver(
        <VariableInput
          initialValue={text}
          size={sizeTypes.medium}
          variableParser={variableParser}
        />,
      );
      expect(driver.isTagSmall()).toBeTruthy();
    });
    it('should render a tag in large size', async () => {
      const text = `Some text {{${variableEntity.value}}} `;
      const driver = createDriver(
        <VariableInput
          initialValue={text}
          size={sizeTypes.large}
          variableParser={variableParser}
        />,
      );
      expect(driver.isTagMedium()).toBeTruthy();
    });
  });
  describe('disabled', () => {
    it('should disable component when passing `disabled` prop', async () => {
      const driver = createDriver(<VariableInput disabled />);
      expect(await driver.isDisabled()).toBe(true);
    });
  });
  describe('placeholder', () => {
    it('should render a placeholder', async () => {
      const placeholderText = 'Placeholder';
      const driver = createDriver(
        <VariableInput placeholder={placeholderText} />,
      );
      expect(await driver.getContent()).toBe('');
      expect(await driver.getPlaceholder()).toBe(placeholderText);
    });
  });
  describe('onChange', () => {
    it('should invoke `onChange` with variable while typing', async () => {
      const callback = jest.fn();
      const expectedHtmlValue = `{{${variableEntity.value}}} `;
      const driver = createDriver(
        <VariableInput onChange={callback} variableParser={variableParser} />,
      );
      await driver.enterText(expectedHtmlValue);
      expect(callback).toHaveBeenCalledWith(expectedHtmlValue);
    });
  });
});
