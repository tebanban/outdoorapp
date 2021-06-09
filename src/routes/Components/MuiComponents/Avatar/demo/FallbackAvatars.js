import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function FallbackAvatars() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar alt="Remy Sharp" src={'/images/avatar/avatar3.jpg'} className={classes.orange}>
        B
      </Avatar>
      <Avatar alt="Remy Sharp" src={'/images/avatar/avatar4.jpg'} className={classes.orange} />
      <Avatar src={'/images/avatar/avatar5.jpg'} />
    </Box>
  );
}
