import Head from 'next/head';
import DvrIcon from '@mui/icons-material/Dvr';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import Layout from '../components/ui/layout';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      padding: '2.4rem 30rem',
      [theme.breakpoints.down('xl')]: {
        padding: '4rem 15rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '4rem 10.5rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
    section: {
      width: '100%',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconWrapper: {
      width: '10rem',
      height: '10rem',
    },
  };
});

export default function Features() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Head>
        <title>URL shortening API - Features</title>
        <meta name='description' content='URL shortening API' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={classes.container}>
        <Typography variant='h1'>Features</Typography>
        <div className={classes.section} id='link-shortening'>
          <Typography variant='h3'>Link Shortening</Typography>
          <DvrIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='branded-links'>
          <Typography variant='h3'>Branded Links</Typography>
          <EmojiObjectsIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='analytics'>
          <Typography variant='h3'>Analytics</Typography>
          <EngineeringIcon className={classes.iconWrapper} />
        </div>
      </div>
    </Layout>
  );
}
