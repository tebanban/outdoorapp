import React, { useContext, useState } from 'react';
import { Collapse } from '@material-ui/core';
import CmtCardHeader from '../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../@coremat/CmtList';
import { CONTAINER_OPTIONS } from '../../@jumbo/constants/CustomizerOptions';
import Box from '@material-ui/core/Box';
import CmtImage from '../../@coremat/CmtImage';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CmtCard from '../../@coremat/CmtCard';
import { BuilderContext } from './ContextProvider';
import useStyles from './Section.style';

const ContainerStyle = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const { containerStyle, setContainerStyle } = useContext(BuilderContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Container Style"
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
            data={CONTAINER_OPTIONS}
            renderRow={(item, index) => (
              <Box key={index} className="nav-layout-item" onClick={() => setContainerStyle(item.id)}>
                <Box className="nav-layout-thumb">
                  <Box position="relative">
                    <CmtImage key={index} src={item.image} alt={item.title} />
                    {containerStyle === item.id && <CheckCircleIcon className={classes.checkIcon} />}
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

export default ContainerStyle;
