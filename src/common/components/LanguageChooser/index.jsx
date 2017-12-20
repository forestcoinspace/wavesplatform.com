import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import window from 'global/window';
import { pathOr } from 'ramda';

import { withCookies } from 'react-cookie';
import { LANGUAGE_MAP, ICONS_MAP } from './lib/constants.js';
import Select from 'react-select';
import Null from 'config/lib/NoopReact';
import injectSheet from 'react-jss';
import styles from './styles';

const createOption = lang => ({ value: lang, label: LANGUAGE_MAP[lang] });
const availableLocales = pathOr([], ['__AVAILABLE_LOCALES'])(window);
const OPTIONS = availableLocales.map(createOption);
const COOKIE_LANGUAGE_PATH = 'locale';
const Arrow = ICONS_MAP.arrow;
const arrowUp = <Arrow style={{ transform: 'rotate(180deg)' }} />;
const arrowDown = <Arrow />;
const arrowRenderer = ({ isOpen }) => (isOpen ? arrowUp : arrowDown);

@injectSheet(styles)
@withCookies
class LanguageChooser extends PureComponent {
  static propTypes = {
    cookies: PropTypes.object.isRequired,
  };
  handleChange = language => {
    this.props.cookies.set(COOKIE_LANGUAGE_PATH, language);
    document.location.reload();
  };
  render() {
    const { cookies, classes } = this.props;
    if (!availableLocales || availableLocales.length === 0) {
      return null;
    }
    return (
      <Select
        className={classes.select}
        arrowRenderer={arrowRenderer}
        onChange={this.handleChange}
        optionComponent={LanguageOption}
        options={OPTIONS}
        value={cookies.get(COOKIE_LANGUAGE_PATH)}
        valueComponent={LanguageValueWithStyles}
        simpleValue
        searchable={false}
        clearRenderer={Null}
      />
    );
  }
}

@injectSheet(styles)
class LanguageOption extends PureComponent {
  static propType = {
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired,
  };
  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { option, className, classes } = this.props;
    const Icon = ICONS_MAP[option.value];
    return (
      <div className={className} onClick={this.handleClick}>
        <Icon />
        <span className={classes.optionLabel}>{option.label}</span>
      </div>
    );
  }
}

const LanguageValue = props => {
  const { value, classes } = props;
  const Icon = ICONS_MAP[value.value];

  return (
    <div type="body" className={classes.value}>
      <Icon />
      <span className={classes.valueLabel}>{value.label}</span>
    </div>
  );
};

LanguageValue.propTypes = {
  value: PropTypes.object,
  classes: PropTypes.object,
};

const LanguageValueWithStyles = injectSheet(styles)(LanguageValue);

export default LanguageChooser;
