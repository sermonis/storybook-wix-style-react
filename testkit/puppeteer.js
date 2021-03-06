/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/puppeteer.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import 'regenerator-runtime/runtime';
import {
  puppeteerTestkitFactoryCreator,
  puppeteerUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/puppeteer';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.puppeteer.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = puppeteerTestkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = puppeteerUniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);
const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};

export const accordionTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Accordion/Accordion.uni.driver')));
export const addItemTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/AddItem/AddItem.uni.driver')));
export const autoCompleteTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/AutoComplete/AutoComplete.uni.driver')));
export const avatarTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Avatar/Avatar.uni.driver')));
export const badgeTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Badge/Badge.uni.driver')));
export const boxTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Box/Box.uni.driver')));
export const breadcrumbsTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Breadcrumbs/Breadcrumbs.uni.driver')));
export const buttonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Button/Button.uni.driver')));
export const calendarTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Calendar/Calendar.uni.driver')));
export const calendarPanelTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/CalendarPanel/CalendarPanel.uni.driver')));
export const calendarPanelFooterTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver')));
export const cardGalleryItemTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/CardGalleryItem/CardGalleryItem.uni.driver')));
export const carouselTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Carousel/Carousel.uni.driver')));
export const checkboxTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Checkbox/Checkbox.uni.driver')));
export const circularProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/CircularProgressBar/CircularProgressBar.uni.driver')));
export const closeButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/CloseButton/CloseButton.uni.driver')));
export const colorInputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ColorInput/ColorInput.uni.driver')));
export const colorPickerTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ColorPicker/ColorPicker.uni.driver')));
export const contactItemBuilderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ContactItemBuilder/ContactItemBuilder.uni.driver')));
export const dataTableTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/DataTable/DataTable.uni.driver')));
export const dateInputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/DateInput/DateInput.uni.driver')));
export const dropdownTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Dropdown/Dropdown.uni.driver')));
export const dropdownBaseTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/DropdownBase/DropdownBase.uni.driver')));
export const dropdownLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/DropdownLayout/DropdownLayout.uni.driver')));
export const editableSelectorTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/EditableSelector/EditableSelector.uni.driver')));
export const editableTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/EditableTitle/EditableTitle.uni.driver')));
export const emptyStateTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/EmptyState/EmptyState.uni.driver')));
export const errorIndicatorTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ErrorIndicator/ErrorIndicator.uni.driver')));
export const filePickerTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/FilePicker/FilePicker.uni.driver')));
export const floatingNotificationTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/FloatingNotification/FloatingNotification.uni.driver')));
export const formFieldTestkitFactory = puppeteerTestkitFactoryCreator(load(require('../src/FormField/FormField.puppeteer.driver')));
export const genericModalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/GenericModalLayout/GenericModalLayout.uni.driver')));
export const googlePreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/GooglePreview/GooglePreview.uni.driver')));
export const headingTestkitFactory = puppeteerTestkitFactoryCreator(load(require('../src/Heading/Heading.puppeteer.driver')));
export const iconButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/IconButton/IconButton.uni.driver')));
export const toggleButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ToggleButton/ToggleButton.uni.driver')));
export const imageViewerTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ImageViewer/ImageViewer.uni.driver')));
export const inputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Input/Input.uni.driver')));
export const inputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/InputArea/InputArea.uni.driver')));
export const inputWithOptionsTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/InputWithOptions/InputWithOptions.uni.driver')));
export const linearProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/LinearProgressBar/LinearProgressBar.uni.driver')));
export const ListItemActionTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ListItemAction/ListItemAction.uni.driver')));
export const loaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Loader/Loader.uni.driver')));
export const modalTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Modal/Modal.uni.driver')));
export const multiSelectTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MultiSelect/MultiSelect.uni.driver')));
export const multiSelectCheckboxTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MultiSelectCheckbox/MultiSelectCheckbox.uni.driver')));
export const noBorderInputTestkitFactory = puppeteerTestkitFactoryCreator(load(require('../src/NoBorderInput/NoBorderInput.puppeteer.driver')));
export const notificationTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Notification/Notification.uni.driver')));
export const numberInputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/NumberInput/NumberInput.uni.driver')));
export const pageTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Page/Page.uni.driver')));
export const pageHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/PageHeader/PageHeader.uni.driver')));
export const popoverTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Popover/Popover.uni.driver')));
export const proportionTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Proportion/Proportion.uni.driver')));
export const richTextInputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/RichTextInputArea/RichTextInputArea.uni.driver')));
export const searchTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Search/Search.uni.driver')));
export const sectionHelperTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SectionHelper/SectionHelper.uni.driver')));
export const segmentedToggleTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SegmentedToggle/SegmentedToggle.uni.driver')));
export const sidebarTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Sidebar/Sidebar.uni.driver')));
export const sidebarSectionTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver')));
export const sliderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Slider/Slider.uni.driver')));
export const socialPreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SocialPreview/SocialPreview.uni.driver')));
export const statsWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/StatsWidget/StatsWidget.uni.driver')));
export const stepperTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Stepper/Stepper.uni.driver')));
export const swatchesTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Swatches/Swatches.uni.driver')));
export const tableTestkitFactory = puppeteerTestkitFactoryCreator(load(require('../src/Table/Table.puppeteer.driver')));
export const tabsTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Tabs/Tabs.uni.driver')));
export const tagTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Tag/Tag.uni.driver')));
export const textTestkitFactory = puppeteerTestkitFactoryCreator(load(require('../src/Text/Text.puppeteer.driver')));
export const textButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/TextButton/TextButton.uni.driver')));
export const thumbnailTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Thumbnail/Thumbnail.uni.driver')));
export const timeInputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/TimeInput/TimeInput.uni.driver')));
export const sidebarSectionItemTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidebarSectionItem/SidebarSectionItem.uni.driver')));
export const sidebarDividerTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidebarDivider/SidebarDivider.uni.driver')));
export const sidebarBackButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidebarBackButton/SidebarBackButton.uni.driver')));
export const sidebarHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidebarHeader/SidebarHeader.uni.driver')));
export const modalPreviewLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver')));
export const statisticsWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/StatisticsWidget/StatisticsWidget.uni.driver')));
export const composerHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ComposerHeader/ComposerHeader.uni.driver')));
export const fillPreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/FillPreview/FillPreview.uni.driver')));
export const fillButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/FillButton/FillButton.uni.driver')));
export const barChartTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/BarChart/BarChart.uni.driver')));
export const inputWithLabelTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/InputWithLabel/InputWithLabel.uni.driver')));
export const autoCompleteWithLabelTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver')));
export const dividerTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Divider/Divider.uni.driver')));
export const labelledElementTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/LabelledElement/LabelledElement.uni.driver')));
export const previewWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/PreviewWidget/PreviewWidget.uni.driver')));
export const modalMobileLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ModalMobileLayout/ModalMobileLayout.uni.driver')));
export const mediaOverlayTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MediaOverlay/MediaOverlay.uni.driver')));
export const infoIconTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/InfoIcon/InfoIcon.uni.driver')));
export const socialButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SocialButton/SocialButton.uni.driver')));
export const verticalTabsTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/VerticalTabs/VerticalTabs.uni.driver')));
export const verticalTabsItemTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/VerticalTabsItem/VerticalTabsItem.uni.driver')));
export const mobilePreviewWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver')));
export const listItemSectionTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ListItemSection/ListItemSection.uni.driver')));
export const browserPreviewWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver')));
export const listItemSelectTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/ListItemSelect/ListItemSelect.uni.driver')));
export const timeTableTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/TimeTable/TimeTable.uni.driver')));
export const marketingLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MarketingLayout/MarketingLayout.uni.driver')));
export const paletteTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Palette/Palette.uni.driver')));
export const warningIndicatorTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/WarningIndicator/WarningIndicator.uni.driver')));
export const variableInputTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/VariableInput/VariableInput.uni.driver')));
export const imageTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Image/Image.uni.driver')));
export const sidePanelTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/SidePanel/SidePanel.uni.driver')));
export const drillViewTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Deprecated/SideMenu/DrillView/DrillView.uni.driver')));
export const cardHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Card/Header/Header.uni.driver')));
export const sideMenuTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Deprecated/SideMenu/core/SideMenu.uni.driver')));
export const editableRowTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/EditableSelector/EditableRow/EditableRow.uni.driver')));
export const messageBoxMarketerialLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver')));
export const messageBoxFunctionalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver')));
export const subheaderTestkitFactory = puppeteerUniTestkitFactoryCreator(load(require('../src/Card/Subheader/Subheader.uni.driver')));
