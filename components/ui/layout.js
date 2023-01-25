import { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles()((theme) => {
  return {
    spacer: {
      marginBottom: '6rem',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '5rem',
      },
    },
  };
});

function Layout({ children }) {
  const { classes } = useStyles();

  return (
    <Fragment>
      <Header />
      <div className={classes.spacer}></div>
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
