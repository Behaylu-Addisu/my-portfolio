import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const sizeTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider