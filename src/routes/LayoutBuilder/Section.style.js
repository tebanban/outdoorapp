import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: 24,
    },
    '& .Cmt-card-content': {
      padding: '0 24px 24px',
    },
  },
  optionListRoot: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -12,
    marginRight: -12,
    '& .nav-layout-item': {
      paddingLeft: 12,
      paddingRight: 12,
      marginBottom: 20,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '25%',
      },
      [theme.breakpoints.up('md')]: {
        width: '20%',
      },
      [theme.breakpoints.up('xl')]: {
        width: '12%',
      },
      '& .nav-layout-thumb': {
        textAlign: 'center',
        cursor: 'pointer',
      },
      '& img': {
        width: '100%',
      },
    },
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: theme.palette.success.main,
  },
  colorPickRoot: {
    position: 'relative',
    '& .MuiInputBase-input': {
      paddingRight: 45,
    },
  },
  colorPickBlock: {
    position: 'absolute',
    top: 1,
    right: 1,
    zIndex: 1,
    '& > div': {
      border: '0 none',
      cursor: 'pointer',
      padding: 0,
    },
    '& > div > div': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      height: 38,
      width: 38,
    },
  },
}));

export default useStyles;
