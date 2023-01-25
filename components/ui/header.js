import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import cls from 'classnames';

import LogoHeader from '../../images/logo-header';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      padding: '2.4rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.4rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2.4rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2.4rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.4rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    logoContainer: {
      height: '2.5rem',
      width: '7.5rem',
      padding: 0,
      [theme.breakpoints.down('md')]: {
        marginRight: 'auto',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      // marginBottom: '2.1em',
      // [theme.breakpoints.down('md')]: {
      //   marginBottom: '1em',
      // },
      // [theme.breakpoints.down('xs')]: {
      //   marginBottom: '1em',
      // },
    },
    loginTabAlign: {
      position: 'absolute',
      right: '7rem',
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '2.5rem',
      width: '2.5rem',
    },
    drawer: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '10px',
      padding: '2rem 1rem',
      top: '5.6rem',
      width: '98%',
      marginLeft: '1%',
      marginRight: '1%',
    },
    drawerItemButton: {
      color: theme.palette.common.white,
      '&.MuiListItemButton-divider': {
        borderColor: theme.palette.common.grayish_violet,
      },
    },
    drawerItemButtonSelected: {
      fontWeight: '700',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.cyan,
      borderRadius: '50px',
      '&:hover': {
        backgroundColor: theme.palette.common.cyan,
      },
    },
    listItemText: { textAlign: 'center', padding: '0.2rem 0' },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '&.MuiTabs-root': {
    width: 'calc(100% - 7.5rem)',
    paddingLeft: '2rem',
  },
  '& .MuiTabs-flexContainer': {
    display: 'block',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light,
    fontSize: '1.2rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1rem',
    },
    '&.Mui-selected': {
      color: theme.palette.primary.light,
      fontWeight: 700,
    },
  })
);

const ButtonTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.cyan,
    boxShadow: `0 3px 3px ${theme.palette.common.cyan}`,
    borderRadius: '20px',
    minHeight: '2.5rem',
    padding: 0,
    fontSize: '1.2rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1rem',
    },
    // marginLeft: 'auto',
    '&.Mui-selected': {
      color: theme.palette.common.white,
      fontWeight: 700,
    },
    '&.MuiButtonBase-root': {
      padding: 0,
      height: '2.5rem',
      width: '6.5rem',
    },
    '&.MuiTab-root': {
      position: 'absolute',
      bottom: '4px',
      right: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.common.darker_cyan,
      boxShadow: `0 3px 3px ${theme.palette.common.darker_cyan}`,
    },
  })
);

function Header() {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (router.pathname === '/features' && value !== 0) {
      setValue(0);
    } else if (router.pathname === '/pricing' && value !== 1) {
      setValue(1);
    } else if (router.pathname === '/resources' && value !== 2) {
      setValue(2);
    } else if (router.pathname === '/login' && value !== 3) {
      setValue(3);
    } else if (router.pathname === '/sign-up' && value !== 4) {
      setValue(4);
    } else if (router.pathname === '/' && !value) {
      setValue(false);
    }
  }, [router, value]);

  const tabs = (
    <StyledTabs value={value} onChange={handleChange} variant='fullWidth'>
      <StyledTab label='Features' component={Link} href='/features' />
      <StyledTab label='Pricing' component={Link} href='/pricing' />
      <StyledTab label='Resources' component={Link} href='/resources' />
      <StyledTab
        label='Login'
        className={classes.loginTabAlign}
        component={Link}
        href='/login'
      />
      <ButtonTab label='Sign Up' component={Link} href='/sign-up' />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            href='/features'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 0 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Features
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            href='/pricing'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 1 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Pricing
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            component={Link}
            href='/resources'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 2 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Resources
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            href='/login'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 3 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Login
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            component={Link}
            href='/sign-up'
            disablePadding
            className={cls(
              classes.drawerItemButton,
              value === 4 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Sign Up
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBarContainer} position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href='/'
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                setOpenDrawer(false);
                setValue(false);
              }}
            >
              <LogoHeader />
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default Header;
