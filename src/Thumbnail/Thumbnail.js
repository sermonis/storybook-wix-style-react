import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.st.css';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import Text from '../Text';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { dataHooks } from './constants';

const isString = a => typeof a === 'string';

/**
 * # Thumbnail
 * Component for showing thumbnails
 *
 * It takes full space of parent component, works well together with `<Proportion/>`
 * */
class Thumbnail extends React.PureComponent {
  static displayName = 'Thumbnail';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Children to render inside thumbnail. If children passed then title will be rendered below thumbnail */
    children: PropTypes.node,

    /** Title node */
    title: PropTypes.node,

    /** Description node */
    description: PropTypes.node,

    /** Image to display in thumbnail.
     * If given as string, it will be used within `<img/>`.
     * Otherwise can be given as React.Node
     */
    image: PropTypes.node,

    /** Thumbnail size */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Set selected state of thumbnail */
    selected: PropTypes.bool,

    /** Set disabled state of thumbnail */
    disabled: PropTypes.bool,

    /** Hide icon when thumbnail is selected */
    hideSelectedIcon: PropTypes.bool,

    /** Overrides description and image properties. Title is rendered below image thumbnail */
    backgroundImage: PropTypes.node,

    /** Callback function for onClick event */
    onClick: PropTypes.func,

    /** Width of Thumbnail */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Height of Thumbnail */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    size: 'medium',
    selected: false,
    disabled: false,
  };

  _renderBottomTitle = () => {
    const { size, title, selected, disabled } = this.props;

    return (
      <Text
        {...styles('bottomTitle', { selected, disabled }, this.props)}
        dataHook={dataHooks.thumbnailBottomTitle}
        size={size}
        tagName="div"
        weight="thin"
        ellipsis
        children={title}
      />
    );
  };

  _renderBackgroundLayout = () => {
    const { disabled } = this.props;

    return isString(this.props.backgroundImage) ? (
      <div
        {...styles('backgroundImage', { disabled }, this.props)}
        data-hook={dataHooks.thumbnailBackgroundImage}
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      />
    ) : (
      this.props.backgroundImage
    );
  };

  _renderNoBackgroundLayout = () => {
    const { title, description, image, size } = this.props;

    return (
      <div>
        {image && (
          <div
            className={styles.image}
            data-hook={dataHooks.thumbnailImage}
            children={isString(image) ? <img src={image} /> : image}
          />
        )}

        {title && (
          <Text
            className={styles.title}
            dataHook={dataHooks.thumbnailTitle}
            size={size}
            tagName="div"
            weight="normal"
            children={title}
          />
        )}

        {description && (
          <Text
            className={styles.description}
            dataHook={dataHooks.thumbnailDescription}
            size={size}
            weight="thin"
            tagName="div"
            secondary
            children={description}
          />
        )}
      </div>
    );
  };

  _renderThumbnailContent = () => {
    const { backgroundImage, children, disabled } = this.props;
    const hasBackground = !!backgroundImage;
    const hasChildren = !!children;

    if (hasChildren) {
      return (
        <div {...styles('customChild', { disabled }, this.props)}>
          {children}
        </div>
      );
    }

    if (hasBackground) {
      return this._renderBackgroundLayout();
    }

    return this._renderNoBackgroundLayout();
  };

  _renderSelectedIcon = () => (
    <div
      className={styles.selectedIcon}
      data-hook={dataHooks.thumbnailSelectedIcon}
    >
      <CheckboxChecked height="7.8" width="10" />
    </div>
  );

  _onKeyDown = event =>
    [13 /* enter */, 32 /* space */].some(key => event.keyCode === key) &&
    this.props.onClick(event);

  render() {
    const {
      children,
      dataHook,
      size,
      selected,
      disabled,
      title,
      backgroundImage,
      onClick,
      hideSelectedIcon,
      width,
      height,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;

    const hasChildren = !!children;
    const hasBackground = !!backgroundImage;
    const showBottomTitle = (hasChildren || hasBackground) && title;

    return (
      <div
        style={{ width }}
        {...styles('root', { disabled }, this.props)}
        onClick={disabled ? null : onClick}
        onKeyDown={disabled ? null : this._onKeyDown}
        data-hook={dataHook}
      >
        <div
          style={{ height }}
          {...styles(
            'thumbnail',
            { selected, disabled, size, hasBackground, hasChildren },
            this.props,
          )}
          data-selected={selected}
          data-disabled={disabled}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
          tabIndex={disabled ? null : 0}
          data-hook={dataHooks.thumbnailWrapper}
        >
          {!hideSelectedIcon && selected && this._renderSelectedIcon()}
          {this._renderThumbnailContent()}
        </div>
        {showBottomTitle ? this._renderBottomTitle() : null}
      </div>
    );
  }
}

export default withFocusable(Thumbnail);
