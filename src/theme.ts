import * as tinyColor from 'tinycolor2'
const baseColors = {
  light: '#EDEAE3',
  lightAccent: '#50B9C4',
  main: '#286CB5',
  darkAccent: '#96526B',
  dark: '#202930'
}
const extendedColors = {
  lighter: tinyColor(baseColors.light)
  .lighten(5)
  .toString(),
  lightDarkened: tinyColor(baseColors.light).darken(10).toString(),
  mainDarkend: tinyColor(baseColors.main).darken(10).toString(),
  lightAccentDarkened: tinyColor(baseColors.lightAccent).darken(10).toString(),
  darkAccentLightened:  tinyColor(baseColors.darkAccent)
  .lighten(10)
  .toString(),
  darkAccentDarkened:  tinyColor(baseColors.darkAccent)
  .darken(5)
  .toString()
}
export const colors = {
  ...baseColors,
  ...extendedColors
}

export const mobileWidth = 700
