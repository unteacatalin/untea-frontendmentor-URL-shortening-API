import Head from 'next/head';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import Layout from '../components/ui/layout';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      padding: '2.4rem 10.5rem 2.4rem 10.5rem',
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

export default function Company() {
  const { classes } = useStyles();
  return (
    <Layout>
      <Head>
        <title>URL shortening API - Company</title>
        <meta name='description' content='URL shortening API' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={classes.container}>
        <Typography variant='h3'>Company</Typography>
        <div className={classes.section} id='about'>
          <Typography variant='h4'>About</Typography>
          <InfoIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='our-team'>
          <Typography variant='h4'>Out Team</Typography>
          <GroupsIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='careers'>
          <Typography variant='h4'>Careers</Typography>
          <WorkIcon className={classes.iconWrapper} />
        </div>
        <div className={classes.section} id='contact'>
          <Typography variant='h4'>Contact</Typography>
          <ContactMailIcon className={classes.iconWrapper} />
        </div>
      </div>
    </Layout>
  );
}
