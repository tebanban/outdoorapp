import React, { useContext, useState } from 'react';

import { Box, Collapse } from '@material-ui/core';

import CmtCard from '../../@coremat/CmtCard';
import CmtCardHeader from '../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../@coremat/CmtCard/CmtCardContent';

import AppTextInput from '../../@jumbo/components/Common/formElements/AppTextInput';
import ColorPickerPopup from '../../@jumbo/components/Common/ColorPickerPopup';

import { BuilderContext } from './ContextProvider';
import useStyles from './Section.style';

const ThemeColors = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useContext(BuilderContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Theme Colors"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: 'pointer',
          onClick: () => setCollapsed(!collapsed),
        }}
      />

      <Collapse in={collapsed}>
        <CmtCardContent>
          <Box display="flex" flexWrap="wrap">
            <Box mr={6} mb={2}>
              <Box component="label" display="block" mb={2}>
                Primary Color
              </Box>
              <Box className={classes.colorPickRoot} mb={5}>
                <AppTextInput variant="outlined" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} />

                <Box ml={2} className={classes.colorPickBlock}>
                  <ColorPickerPopup color={primaryColor || '#6200EE'} setColor={setPrimaryColor} />
                </Box>
              </Box>
            </Box>

            <Box mr={6} mb={2}>
              <Box component="label" display="block" mb={2}>
                Secondary Color
              </Box>
              <Box className={classes.colorPickRoot} mb={5}>
                <AppTextInput variant="outlined" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)} />

                <Box ml={2} className={classes.colorPickBlock}>
                  <ColorPickerPopup color={secondaryColor || '#03DAC5'} setColor={setSecondaryColor} />
                </Box>
              </Box>
            </Box>
          </Box>
        </CmtCardContent>
      </Collapse>
    </CmtCard>
  );
};

export default ThemeColors;
