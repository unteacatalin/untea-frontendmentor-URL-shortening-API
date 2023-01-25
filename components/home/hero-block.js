import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      position: 'relative',
      padding: '0 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '0 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '0 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0 3rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    message: {
      ...theme.typography.body,
      color: theme.palette.common.grayish_violet,
      fontSize: '1.2rem',
      textAlign: 'left',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    button: {
      backgroundColor: theme.palette.common.cyan,
      color: theme.palette.common.white,
      borderRadius: '50px',
      textTransform: 'none',
      margin: '2rem 0',
      height: '5rem',
      width: '12rem',
      fontSize: '1.4rem',
      [theme.breakpoints.down('xl')]: {
        height: '4rem',
        width: '12rem',
        fontSize: '1.2rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.common.darker_cyan,
      },
    },
    image: {
      width: '45rem',
      height: 'auto',
      [theme.breakpoints.down('xl')]: {
        width: '30rem',
      },
      [theme.breakpoints.down('lg')]: {
        width: '25rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '30rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '25rem',
      },
    },
    title: {
      fontSize: '5rem',
      textAlign: 'left',
      [theme.breakpoints.down('xxl')]: {
        fontSize: '4.5rem',
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '4.5rem',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '4rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '4.5rem',
        textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '3.5rem',
      },
    },
  };
});

function HeroBlock() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid item container className={classes.container} lg={12} sm={12} xs={12}>
      <Grid
        item
        container
        md={6}
        sm={12}
        justifyContent={matchesMD ? 'center' : 'flex-start'}
        alignItems='center'
      >
        <Typography variant='h1' className={classes.title}>
          More then just shorter links
        </Typography>
        <Typography className={classes.message}>
          Build your brand&apos;s recognition and get detailed insights on
          howyour links are performing.
        </Typography>
        <Button variant='contained' className={classes.button} disableRipple>
          Get Started
        </Button>
      </Grid>
      <Grid
        item
        container
        md={6}
        sm={12}
        justifyContent={matchesMD ? 'center' : 'flex-end'}
        alignItems='center'
      >
        <Image
          className={classes.image}
          src='illustration-working.svg'
          alt='illustration working'
          width={0}
          height={0}
        />
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
