const YELLOW = '#e69b00';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const RED = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const WHITE = '#fff';
const BLACK = '#000';
const LIGHTGRY = '#ffFFFF26';
const LIGHTCONTENT = 'light-content';
const DARKCONTENT = 'dark-content';
const DARK = '#101418';
const BLUE = '#3897f1'

const common: Record<string, string> = {
  PRIMARY: YELLOW,
  SUCCESS: EMERALD,
  ERROR: RED,
  TEXTINPUTCONTAINER: SILVER,
  BLUEBUTTON: BLUE,
};

type Colors = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

const colors: Colors = {
  light: {
    ...common,
    BACKGROUND: WHITE,
    TEXT: BLACK,
    TEXTINPUTCONTAINER: SILVER
  },
  dark: {
    ...common,
    BACKGROUND: BLACK,
    TEXT: WHITE,
    TEXTINPUTCONTAINER: WHITE,
  },
};

export default colors;
