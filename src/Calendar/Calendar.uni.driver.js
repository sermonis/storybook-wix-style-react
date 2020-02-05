import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const calendarUniDriverFactory = base => {
  const getCalendar = () => base.$('.DayPicker');
  const getNthDay = n =>
    base
      .$$('[role="gridcell"]:not([class*="outside"]):not([class*="disabled"])')
      .get(n);
  const getNthDayOfTheMonth = n =>
    base.$$('[role="gridcell"]:not([class*="outside"])')[n];
  const getDayOfDate = (year, month, day) =>
    base.$(
      `[role="gridcell"]:not([class*="outside"])>[data-date='${year}-${month}-${day}']`,
    );
  const getSelectedDay = () =>
    base.$(
      '[role="gridcell"][aria-selected=true]:not(.DayPicker-Day--outside)',
    );

  const getVisibleDisabledList = () =>
    base.$$('[role="gridcell"][aria-disabled=true]');
  const getYearDropdownButton = () =>
    base.$('[data-hook="datepicker-year-dropdown-button"]');
  const getMonthDropdownButton = () =>
    base.$('[data-hook="datepicker-month-dropdown-button"]');
  const getNthYear = n => base.$(`[data-hook="dropdown-item-${n}"]`);
  const getMonthCaption = () =>
    base.$$('[data-hook="datepicker-month-caption"]').get(0);
  const getYearCaption = () => base.$('[data-hook="datepicker-year-caption"]');
  const getMonthAndYear = () => [getMonthCaption(), getYearCaption()];
  const getNthWeekDayName = n =>
    base.$$('[class="DayPicker-Weekday"] abbr').get(n);
  const getPrevMonthButton = () =>
    base.$('[data-hook="datepicker-left-arrow"]');
  const getNextMonthButton = () =>
    base.$('[data-hook="datepicker-right-arrow"]');
  const getFocusedDay = () => base.$('.DayPicker-Day:focus');
  const getVisuallyUnfocusedDay = () => base.$('.DayPicker-Day--unfocused');
  const getMonthContainers = () => base.$$('.DayPicker-Month');
  const getVisibleMonths = () => base.$$('[class="DayPicker-Month"]');
  const getSelectedDays = () =>
    base.$$(
      '[role="gridcell"][aria-selected=true]:not(.DayPicker-Day--outside)',
    );
  const getYearDropdownMenu = () =>
    base.$('[data-hook="datepicker-year-dropdown-menu"]');
  const getMonthDropdownMenu = () =>
    base.$('[data-hook="datepicker-month-dropdown-menu"]');
  const getMonthDropdown = () =>
    base.$('[data-hook="datepicker-month-dropdown"]');
  const getYearDropdown = () =>
    base.$('[data-hook="datepicker-year-dropdown"]');
  const getHeader = () => base.$('[data-hook="datepicker-head"]');

  return {
    ...baseUniDriverFactory(base),
    close: () => ReactBase(getFocusedDay()).pressKey('Escape'),
    isVisible: () => getCalendar().exists(),
    getCurrentMonthWithYear: () =>
      Promise.all(getMonthAndYear().map(elm => elm.text())).then(values =>
        values.join(' '),
      ),
    getNthWeekDayName: async (n = 0) =>
      (await getNthWeekDayName(n).exists()) ? getNthWeekDayName(n).text() : '',
    clickOnNthDay: async (n = 0) =>
      (await getNthDay(n).exists()) && getNthDay(n).click(),
    clickDay: async date => {
      const day = getDayOfDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
      if (await day.exists()) {
        await day.click();
      } else {
        throw new Error(
          `ERROR: CalendarDriver.clickDay() - The given date (${date.toString()}) is not visible`,
        );
      }
    },
    isDayActive: async date => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const value = getDayOfDate(year, month, day);
      if (await value.exists()) {
        return (
          (await getVisibleDisabledList()
            .filter(
              async elm =>
                await elm
                  .$(`:scope > [data-date='${year}-${month}-${day}']`)
                  .exists(),
            )
            .count()) === 0
        );
      } else {
        throw new Error(
          `ERROR: CalendarDriver.isDayActive() - The given date (${date.toString()}) is not visible`,
        );
      }
    },
    clickOnNthDayOfTheMonth: async (n = 0) =>
      (await getNthDayOfTheMonth(n).exists()) && getNthDayOfTheMonth(n).click(),
    clickOnSelectedDay: () => getSelectedDay().click(),
    clickOnYearDropdown: () => getYearDropdownButton().click(),
    clickOnMonthDropdown: () => getMonthDropdownButton().click(),
    clickOnNthYear: (n = 1) => getNthYear(n).mouse.press(),
    clickOnPrevMonthButton: () => getPrevMonthButton().click(),
    clickOnNextMonthButton: () => getNextMonthButton().click(),
    isHeaderVisible: () => getHeader().exists(),
    isYearDropdownExists: () => getYearDropdown().exists(),
    isYearCaptionExists: () => getYearCaption().exists(),
    isMonthDropdownExists: () => getMonthDropdown().exists(),
    isMonthCaptionExists: () => getMonthCaption().exists(),
    getMonthCaption: () => getMonthCaption().text(),
    getMonthDropdownLabel: () => getMonthDropdownButton().text(),
    getSelectedYear: () => getYearDropdownButton().text(),
    /** Returns the text of the focused day or `null` if there is no focused day */
    getFocusedDay: async () => {
      const focusedDayElement = getFocusedDay();
      return (await focusedDayElement.exists())
        ? focusedDayElement.text()
        : null;
    },
    getFocusedDayElement: () => getFocusedDay(),
    pressLeftArrow: () => getFocusedDay().pressKey('ArrowLeft'),
    pressRightArrow: () => getFocusedDay().pressKey('ArrowRight'),
    getSelectedDay: () => getSelectedDay().text(),
    getWidth: () => base._prop('style').then(style => style.width),
    triggerKeyDown: ({ key }) => getFocusedDay().pressKey(key),
    isFocusedDayVisuallyUnfocused: () =>
      getFocusedDay().hasClass('DayPicker-Day--unfocused'),
    containsVisuallyUnfocusedDay: () => getVisuallyUnfocusedDay().exists(),
    isTwoMonthsLayout: async () => (await getMonthContainers().count()) === 2,

    getMonthDropdownDriver: () => {
      getMonthDropdownButton().click();
      return dropdownLayoutDriverFactory(getMonthDropdownMenu());
    },

    getYearDropdownDriver: () => {
      getYearDropdownButton().click();
      return dropdownLayoutDriverFactory(getYearDropdownMenu());
    },
    getNumOfVisibleMonths: () => getVisibleMonths().count(),
    getNumOfSelectedDays: () => getSelectedDays().count(),
    getSelectedDays: () => {
      const datesPromises = getSelectedDays().map(async item => {
        const children = await ReactBase(item)._DEPRECATED_children();
        const child = await children.get(0);
        const attr = await child.attr('data-date');
        const date = attr.split('-').map(part => parseInt(part));

        return new Date(date[0], date[1], date[2]);
      });
      return Promise.all(datesPromises);
    },

    mouseClickOutside: () => ReactBase.clickBody(),
  };
};
