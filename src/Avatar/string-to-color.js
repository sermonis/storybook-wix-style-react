import { avatarColorList } from './constants';

/* stringToColor returns a different color for each string.
 ** Each string will ALWAYS receives the same color, so the color will always be consistent per string
 **/
const stringToColor = name => {
  if (!name) {
    return;
  }
  const hash = stringToNumber(name);
  const index = hash % avatarColorList.length; //this sets an index between 0 and array.length.
  return avatarColorList[index];
};

/* stringToNumber creates a number for each string.
 ** for example the string: "Hi" number will be 177.
 ** charCode of "H" = 72, charCode of "i" = 105. 72 + 105 = 177
 ** This creates a unique number for each string
 **/
const stringToNumber = str =>
  str.split('').reduce((acc, char) => acc + char.charCodeAt(), 0);

export default stringToColor;
