import React from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
};

<<<<<<< HEAD
const ThemeContext = React.createContext(themes.light);
=======
const ThemeContext = React.createContext(themes.dark);
>>>>>>> bc8dc9e8f7f0370b743c10d016316002aa8014ea
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
