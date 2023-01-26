import Head from 'next/head';
import BookIcon from '@mui/icons-material/Book';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import Layout from '../components/ui/layout';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      padding: '2.4rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2.4rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '4rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '4rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2.4rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
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

export default function Resources() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Head>
        <title>URL shortening API - Resources</title>
        <meta name='description' content='URL shortening API' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={classes.container}>
        <Typography variant='h1'>Resources</Typography>
        <div className={classes.section} id='blog'>
          <Typography variant='h3'>Blog</Typography>
          <BookIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='developers'>
          <Typography variant='h3'>Developers</Typography>
          <DeveloperBoardIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='support'>
          <Typography variant='h3'>Support</Typography>
          <ContactSupportIcon className={classes.iconWrapper} />
        </div>
      </div>
    </Layout>
  );
}
