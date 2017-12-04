import {
  blueGrey100,
  blueGrey500,
  blueGrey700,
  pinkA200,
  tealA100,
  lightBlue500,
  grey900,
  white,
  grey400,
  darkBlack,
  vipKidOrange,
  vipKidRed,
  vipKidBlue,
  vipKidTeal,
  vipKidWhite,
  vipRichblack
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

export default {
  spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: vipKidOrange,
    primary2Color: vipKidBlue,
    primary3Color: vipKidTeal,
    accent1Color: vipKidRed,
    accent2Color: vipKidTeal,
    accent3Color: lightBlue500,
    textColor: vipRichblack,
    alternateTextColor: vipKidWhite,
    canvasColor: vipKidWhite,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: vipKidRed
  }
}
