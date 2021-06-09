import React, { useContext } from 'react';
import { SourceCodeComponent } from '../../@jumbo/components/CorematDemosComponents';
import CmtCard from '../../@coremat/CmtCard';
import { BuilderContext } from './ContextProvider';
import { LAYOUT_STYLES, LAYOUT_TYPES, THEME_TYPES } from '../../@jumbo/constants/ThemeOptions';
import GridContainer from '../../@jumbo/components/GridContainer';
import { Collapse, Grid } from '@material-ui/core';
import defaultTheme from '../../theme/defaultTheme';
import { darkTheme, lightTheme, semiDarkTheme } from '../../theme/themeColors';

const SettingSourceCode = () => {
  const {
    layout,
    containerStyle,
    themeType,
    primaryColor,
    secondaryColor,
    collapsedSource,
    getSidebarActiveColors,
  } = useContext(BuilderContext);

  const getLayout = () => {
    if (layout === LAYOUT_TYPES.VERTICAL_DEFAULT) {
      return 'LAYOUT_TYPES.VERTICAL_DEFAULT';
    } else if (layout === LAYOUT_TYPES.VERTICAL_MINIMAL) {
      return 'LAYOUT_TYPES.VERTICAL_MINIMAL';
    } else if (layout === LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER) {
      return 'LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER';
    } else if (layout === LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR) {
      return 'LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR';
    } else if (layout === LAYOUT_TYPES.HORIZONTAL_DEFAULT) {
      return 'LAYOUT_TYPES.HORIZONTAL_DEFAULT';
    } else if (layout === LAYOUT_TYPES.HORIZONTAL_DARK) {
      return 'LAYOUT_TYPES.HORIZONTAL_DARK';
    } else if (layout === LAYOUT_TYPES.HORIZONTAL_MINIMAL) {
      return 'LAYOUT_TYPES.HORIZONTAL_MINIMAL';
    } else if (layout === LAYOUT_TYPES.HORIZONTAL_TOP_MENU) {
      return 'LAYOUT_TYPES.HORIZONTAL_TOP_MENU';
    }
  };

  const getContainerStyle = () => {
    if (containerStyle === LAYOUT_STYLES.BOXED) {
      return 'LAYOUT_STYLES.BOXED';
    } else if (containerStyle === LAYOUT_STYLES.FULL_WIDTH) {
      return 'LAYOUT_STYLES.FULL_WIDTH';
    } else if (containerStyle === LAYOUT_STYLES.FRAMED) {
      return 'LAYOUT_STYLES.FRAMED';
    }
  };

  const getThemeType = () => {
    if (themeType === THEME_TYPES.LIGHT) {
      return 'THEME_TYPES.LIGHT';
    } else if (themeType === THEME_TYPES.DARK) {
      return 'THEME_TYPES.DARK';
    } else if (themeType === THEME_TYPES.SEMI_DARK) {
      return 'THEME_TYPES.SEMI_DARK';
    }
  };

  const getSourceCode = () => {
    return `
// Update following code at src/@jumbo/components/contextProvider/AppContextProvider/defaultContext.js file
  
export default {
  theme: defaultTheme,
  defaultLng: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  layout: ${getLayout()},
  layoutType: ${getContainerStyle()},
  themeType: ${getThemeType()},
  drawerBreakPoint: DRAWER_BREAK_POINT.MD,
  headerType: HEADER_TYPE.FIXED,
  sidebarType: SIDEBAR_TYPE.FULL,
  isSidebarFixed: true,
  sidebarWidth: SIDEBAR_WIDTH.DEFAULT,
  showFooter: false,
};`;
  };

  const primary = {
    ...defaultTheme.palette.primary,
    main: primaryColor,
  };

  const secondary = {
    ...defaultTheme.palette.secondary,
    main: secondaryColor,
  };

  const getDefaultNavColors = () => {
    if (themeType === THEME_TYPES.LIGHT) {
      return {
        sidebar: lightTheme.palette.sidebar,
        horizontalNav: lightTheme.palette.horizontalNav,
        themeName: 'lightTheme',
      };
    } else if (themeType === THEME_TYPES.DARK) {
      return {
        sidebar: darkTheme.palette.sidebar,
        horizontalNav: darkTheme.palette.horizontalNav,
        themeName: 'darkTheme',
      };
    } else if (themeType === THEME_TYPES.SEMI_DARK) {
      return {
        sidebar: semiDarkTheme.palette.sidebar,
        horizontalNav: semiDarkTheme.palette.horizontalNav,
        themeName: 'semiDarkTheme',
      };
    }
  };

  const sidebar = {
    ...getDefaultNavColors().sidebar,
    ...getSidebarActiveColors(),
  };

  const horizontalNav = {
    ...getDefaultNavColors().horizontalNav,
    ...getSidebarActiveColors(),
  };

  const colorsSouceCode = `
// Update following code at src/theme/defaultTheme.js file
  
primary: ${JSON.stringify(primary, null, 2)},
secondary: ${JSON.stringify(secondary, null, 2)}

// Update following code at src/theme/themeColors.js file in "${getDefaultNavColors().themeName}" object palette.
sidebar: ${JSON.stringify(sidebar, null, 2)},
horizontalNav: ${JSON.stringify(horizontalNav, null, 2)},

`;

  return (
    <Collapse in={collapsedSource}>
      <GridContainer>
        <Grid item xs={12} md={12}>
          <CmtCard>
            <SourceCodeComponent sourceCode={getSourceCode()} />
          </CmtCard>
        </Grid>

        <Grid item xs={12} md={12}>
          <CmtCard>
            <SourceCodeComponent sourceCode={colorsSouceCode} />
          </CmtCard>
        </Grid>
      </GridContainer>
    </Collapse>
  );
};

export default SettingSourceCode;
