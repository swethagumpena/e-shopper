import React from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;

// const theme = {
//   light: {
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   dark: {
//     backgroundColor: 'black',
//     color: 'white',
//   },
// };

// export const ThemeContext = React.createContext(theme.light);
