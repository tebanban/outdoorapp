import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { BuilderContext } from './ContextProvider';
import defaultTheme from '../../theme/defaultTheme';

const ActionButtons = () => {
  const {
    layout,
    containerStyle,
    themeType,
    primaryColor,
    secondaryColor,
    collapsedSource,
    setCollapsedSource,
    getSidebarActiveColors,
  } = useContext(BuilderContext);

  const onPreviewClick = () => {
    const sideBarColors = getSidebarActiveColors();

    const settings = {
      layout,
      layoutType: containerStyle,
      themeType,
      theme: {
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          primary: {
            ...defaultTheme.palette.primary,
            main: primaryColor,
          },
          secondary: {
            ...defaultTheme.palette.secondary,
            main: secondaryColor,
          },
        },
      },
    };

    localStorage.setItem('template-settings', JSON.stringify(settings));
    localStorage.setItem('sidebar-colors', JSON.stringify(sideBarColors));
    localStorage.setItem('horizontal-nav-colors', JSON.stringify(sideBarColors));

    window.location.reload();
  };

  return (
    <Box display="flex" flexWrap="wrap">
      <Box mr={{ xs: 4, lg: 6 }} mb={{ xs: 2, lg: 2 }}>
        <Button variant="contained" color="primary" size="large" onClick={onPreviewClick}>
          Preview
        </Button>
      </Box>
      <Box mr={{ xs: 4, lg: 6 }} mb={{ xs: 2, lg: 2 }}>
        <Button variant="contained" color="primary" size="large" onClick={() => setCollapsedSource(!collapsedSource)}>
          INSTRUCTIONS TO APPLY
        </Button>
      </Box>
    </Box>
  );
};

export default ActionButtons;
