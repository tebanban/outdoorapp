import React, { useContext, useState } from 'react';
import CmtCard from '../../@coremat/CmtCard';
import CmtCardHeader from '../../@coremat/CmtCard/CmtCardHeader';
import { Collapse } from '@material-ui/core';
import CmtCardContent from '../../@coremat/CmtCard/CmtCardContent';
import { THEME_TYPE_OPTIONS } from '../../@jumbo/constants/CustomizerOptions';
import Box from '@material-ui/core/Box';
import AppRadioButton from '../../@jumbo/components/Common/formElements/AppRadioButton';
import { BuilderContext } from './ContextProvider';
import useStyles from './Section.style';

const ThemeType = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const { themeType, setThemeType } = useContext(BuilderContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Theme"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: 'pointer',
          onClick: () => setCollapsed(!collapsed),
        }}
      />

      <Collapse in={collapsed}>
        <CmtCardContent>
          <Box>
            {THEME_TYPE_OPTIONS.map((item, index) => (
              <AppRadioButton
                key={index}
                label={item.title}
                value={themeType}
                checked={themeType === item.type}
                onChange={() => setThemeType(item.type)}
              />
            ))}
          </Box>
        </CmtCardContent>
      </Collapse>
    </CmtCard>
  );
};

export default ThemeType;
