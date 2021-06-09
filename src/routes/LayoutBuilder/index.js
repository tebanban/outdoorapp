import React from 'react';
import GridContainer from '../../@jumbo/components/GridContainer';
import { Box, Grid } from '@material-ui/core';
import PageContainer from '../../@jumbo/components/PageComponents/layouts/PageContainer';
import NavigationLayout from './NavigationLayout';
import ContainerStyle from './ContainerStyle';
import ThemeType from './ThemeType';
import ThemeColors from './ThemeColors';
import SettingSourceCode from './SettingSourceCode';
import ContextProvider from './ContextProvider';
import ActionButtons from './ActionButtons';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  pageContainerRoot: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Layout Builder', isActive: true },
];

const LayoutBuilder = () => {
  const classes = useStyles();
  return (
    <PageContainer className={classes.pageContainerRoot} heading="Layout Builder" breadcrumbs={breadcrumbs}>
      <ContextProvider>
        <Box mt={-4} mb={{ xs: 5, md: 6, lg: 8 }}>
          Layout builder is to assist you in quickly building the layout for your project. Select your preferred
          configuration and hit the preview button to see how it works
        </Box>
        <GridContainer>
          <Grid item xs={12}>
            <NavigationLayout />
          </Grid>

          <Grid item xs={12}>
            <ContainerStyle />
          </Grid>

          <Grid item xs={12}>
            <ThemeType />
          </Grid>

          <Grid item xs={12}>
            <ThemeColors />
          </Grid>

          <Grid item xs={12}>
            <ActionButtons />
          </Grid>

          <Grid item xs={12}>
            <SettingSourceCode />
          </Grid>
        </GridContainer>
      </ContextProvider>
    </PageContainer>
  );
};

export default LayoutBuilder;
