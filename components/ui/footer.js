import { useState, useEffect, useContext } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';

import LogoHeader from '../../images/logo-header';
import IconFacebook from '../../images/icon-facebook';
import IconTwitter from '../../images/icon-twitter';
import IconPinterest from '../../images/icon-pinterest';
import IconInstagram from '../../images/icon-instagram';
import URLShortening from '../../store/url-context';

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.common.very_dark_blue,
      width: '100%',
      position: 'relative',
      padding: '4rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '4rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '4rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '4rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '4rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
    logo: {
      height: '2.5rem',
      width: '7.5rem',
    },
    title: {
      ...theme.typography.h5,
      color: theme.palette.common.white,
      paddingBottom: '1rem',
      textAlign: 'left',
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
      },
    },
    subtitle: {
      ...theme.typography.body,
      color: theme.palette.common.gray,
      paddingBottom: '0.5rem',
      textAlign: 'left',
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
      },
    },
    imageWrapper: {
      height: '1.5rem',
      width: '1.5rem',
      margin: 0,
      padding: 0,
    },
    gridBlock: {
      [theme.breakpoints.down('lg')]: {
        marginBottom: '1.5rem',
      },
    },
    logoWrapper: {
      marginBottom: '1.5rem',
    },
  };
});

function Footer() {
  const URLCtx = useContext(URLShortening);
  const [clicked, setClicked] = useState(URLCtx.selected || false);
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const router = useRouter();

  useEffect(() => {
    setClicked(URLCtx.selected);
  }, [URLCtx]);

  useEffect(() => {
    const urlAddress = router.asPath;
    const subQuery = urlAddress.substring(urlAddress.search('#'));

    if (
      router.pathname === '/features' &&
      subQuery === router.pathname &&
      clicked !== 0
    ) {
      URLCtx.updateSelected(0);
    } else if (
      router.pathname === '/features' &&
      subQuery === '#link-shortening' &&
      clicked !== 10
    ) {
      URLCtx.updateSelected(10);
    } else if (
      router.pathname === '/features' &&
      subQuery === '#branded-links' &&
      clicked !== 11
    ) {
      URLCtx.updateSelected(11);
    } else if (
      router.pathname === '/features' &&
      subQuery === '#analytics' &&
      clicked !== 12
    ) {
      URLCtx.updateSelected(12);
    } else if (
      router.pathname === '/resources' &&
      subQuery === router.pathname &&
      clicked !== 2
    ) {
      URLCtx.updateSelected(2);
    } else if (
      router.pathname === '/resources' &&
      subQuery === '#blog' &&
      clicked !== 21
    ) {
      URLCtx.updateSelected(21);
    } else if (
      router.pathname === '/resources' &&
      subQuery === '#developers' &&
      clicked !== 22
    ) {
      URLCtx.updateSelected(22);
    } else if (
      router.pathname === '/resources' &&
      subQuery === '#support' &&
      clicked !== 23
    ) {
      URLCtx.updateSelected(23);
    } else if (
      router.pathname === '/company' &&
      subQuery === router.pathname &&
      clicked !== 6
    ) {
      URLCtx.updateSelected(6);
    } else if (
      router.pathname === '/company' &&
      subQuery === '#about' &&
      clicked !== 61
    ) {
      URLCtx.updateSelected(61);
    } else if (
      router.pathname === '/company' &&
      subQuery === '#our-team' &&
      clicked !== 62
    ) {
      URLCtx.updateSelected(62);
    } else if (
      router.pathname === '/company' &&
      subQuery === '#careers' &&
      clicked !== 63
    ) {
      URLCtx.updateSelected(63);
    } else if (
      router.pathname === '/company' &&
      subQuery === '#contact' &&
      clicked !== 64
    ) {
      URLCtx.updateSelected(64);
    } else if (
      router.pathname === '/' &&
      subQuery === router.pathname &&
      clicked
    ) {
      URLCtx.updateSelected(false);
    } else if (
      router.pathname === '/pricing' ||
      router.pathname === '/login' ||
      router.pathname === '/sign-up' ||
      router.pathname === '/'
    ) {
      URLCtx.updateSelected(false);
    }
  }, [router, clicked, URLCtx]);

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent='space-between'>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-start'}
          alignItems='flex-start'
          lg={4}
          sm={12}
          xs={12}
        >
          <Grid item className={classes.logoWrapper}>
            <Link href='/' onClick={() => URLCtx.updateSelected(false)}>
              <LogoHeader color={theme.palette.common.white} />
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-start'}
          alignItems='flex-start'
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href='/features' onClick={() => URLCtx.updateSelected(0)}>
              <Typography
                className={classes.title}
                style={{
                  color:
                    clicked === 0
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.white}`,
                }}
              >
                Features
              </Typography>
            </Link>
            <Link
              href='/features#link-shortening'
              onClick={() => URLCtx.updateSelected(10)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 10
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Link Shortening
              </Typography>
            </Link>
            <Link
              href='/features#branded-links'
              onClick={() => URLCtx.updateSelected(11)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 11
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Branded Links
              </Typography>
            </Link>
            <Link
              href='/features#analytics'
              onClick={() => URLCtx.updateSelected(12)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 12
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Analytics
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-start'}
          alignItems='flex-start'
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href='/resources' onClick={() => URLCtx.updateSelected(2)}>
              <Typography
                className={classes.title}
                style={{
                  color:
                    clicked === 2
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.white}`,
                }}
              >
                Resources
              </Typography>
            </Link>
            <Link
              href='/resources#blog'
              onClick={() => URLCtx.updateSelected(21)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 21
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Blog
              </Typography>
            </Link>
            <Link
              href='/resources#developers'
              onClick={() => URLCtx.updateSelected(22)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 22
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Developers
              </Typography>
            </Link>
            <Link
              href='/resources#support'
              onClick={() => URLCtx.updateSelected(23)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 23
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Support
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-start'}
          alignItems='flex-start'
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href='/company' onClick={() => URLCtx.updateSelected(6)}>
              <Typography
                className={classes.title}
                style={{
                  color:
                    clicked === 6
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.white}`,
                }}
              >
                Company
              </Typography>
            </Link>
            <Link
              href='/company#about'
              onClick={() => URLCtx.updateSelected(61)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 61
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                About
              </Typography>
            </Link>
            <Link
              href='/company#our-team'
              onClick={() => URLCtx.updateSelected(62)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 62
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Our Team
              </Typography>
            </Link>
            <Link
              href='/company#careers'
              onClick={() => URLCtx.updateSelected(63)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 63
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link
              href='/company#contact'
              onClick={() => URLCtx.updateSelected(64)}
            >
              <Typography
                className={classes.subtitle}
                style={{
                  color:
                    clicked === 64
                      ? `${theme.palette.common.cyan}`
                      : `${theme.palette.common.gray}`,
                }}
              >
                Contact
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-end'}
          alignItems='flex-start'
          lg={2}
          sm={12}
          xs={12}
          spacing={2}
        >
          <Grid item>
            <Link href='https://www.facebook.com/' target='_blank'>
              <div
                className={classes.imageWrapper}
                onClick={() => setClicked(100)}
              >
                <IconFacebook color={clicked === 100 && '#2acfcf'} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href='https://twitter.com/' target='_blank'>
              <div
                className={classes.imageWrapper}
                onClick={() => setClicked(200)}
              >
                <IconTwitter color={clicked === 200 && '#2acfcf'} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href='https://www.pinterest.com/' target='_blank'>
              <div
                className={classes.imageWrapper}
                onClick={() => setClicked(300)}
              >
                <IconPinterest color={clicked === 300 && '#2acfcf'} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href='https://www.instagram.com/' target='_blank'>
              <div
                className={classes.imageWrapper}
                onClick={() => setClicked(400)}
              >
                <IconInstagram color={clicked === 400 && '#2acfcf'} />
              </div>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
