import React, { useContext, useState } from 'react';

import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Collapse } from '@material-ui/core';

import CmtCardHeader from '../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../@coremat/CmtCard';
import CmtImage from '../../@coremat/CmtImage';
import CmtList from '../../@coremat/CmtList';

import { BuilderContext } from './ContextProvider';
import { LAYOUT_OPTIONS } from '../../@jumbo/constants/CustomizerOptions';
import useStyles from './Section.style';

const NavigationLayout = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const { layout, setLayout } = useContext(BuilderContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Navigation Layout"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: 'pointer',
          onClick: () => setCollapsed(!collapsed),
        }}
      />

      <Collapse in={collapsed}>
        <CmtCardContent>
          <CmtList
            className={classes.optionListRoot}
            data={LAYOUT_OPTIONS}
            renderRow={(item, index) => (
              <Box key={index} className="nav-layout-item" onClick={() => setLayout(item.id)}>
                <Box className="nav-layout-thumb">
                  <Box position="relative">
                    <CmtImage src={item.image} alt={item.layoutName} />
                    {item.id === layout && <CheckCircleIcon className={classes.checkIcon} />}
                  </Box>
                  <Box mt={2}>{item.layoutName}</Box>
                </Box>
              </Box>
            )}
          />
        </CmtCardContent>
      </Collapse>
    </CmtCard>
  );
};

export default NavigationLayout;
