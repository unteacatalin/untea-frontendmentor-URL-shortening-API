import { useState, useRef, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import cls from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      position: 'relative',
      padding: '3rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '2rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '2rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2rem 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '2rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
    formWrapper: {
      backgroundImage: "url('./bg-shorten-desktop.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.common.dark_violet,
      height: '8rem',
      borderRadius: '8px',
      padding: '0 2rem',
      width: '100%',
      // height: '100%',
      position: 'relative',
      [theme.breakpoints.down('xl')]: {
        padding: '1rem 2rem',
        height: '8rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '2rem',
        height: '13rem',
      },
    },
    textShortenIt: {
      width: '100%',
      backgroundColor: theme.palette.common.white,
      borderRadius: '8px',
      height: '3.5rem',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      border: 'none',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
      '&::placeholder': {
        color: theme.palette.common.gray,
      },
    },
    textShortenIt_error: {
      border: `1px solid ${theme.palette.common.red} !important`,
      '&::placeholder': {
        color: theme.palette.common.red,
      },
    },
    button: {
      height: 'calc(3.5rem - 5px)',
      borderRadius: '8px',
      width: '100%',
      margin: '0 0 0 1rem',
      backgroundColor: theme.palette.common.cyan,
      border: `1px solid ${theme.palette.common.cyan}`,
      color: theme.palette.common.white,
      fontSize: '1.1rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
      boxShadow: `0 3px 3px ${theme.palette.common.cyan}`,
      [theme.breakpoints.down('lg')]: {
        margin: 0,
        padding: 0,
      },
      '&:hover': {
        backgroundColor: theme.palette.common.darker_cyan,
        border: `1px solid ${theme.palette.common.darker_cyan}`,
        boxShadow: `0 3px 3px ${theme.palette.common.darker_cyan}`,
      },
    },
    buttonHover: {
      backgroundColor: theme.palette.common.darker_cyan,
      border: `1px solid ${theme.palette.common.darker_cyan}`,
      boxShadow: `0 3px 3px ${theme.palette.common.darker_cyan}`,
    },
    error: {
      display: 'none',
      color: theme.palette.common.red,
      position: 'absolute',
      bottom: '10%',
      left: '4%',
      transform: 'translate(-4%, -10%)',
      fontSize: '0.8rem',
      [theme.breakpoints.down('xl')]: {
        bottom: '9%',
        left: '3%',
        transform: 'translate(-3%, -9%)',
      },
      [theme.breakpoints.down('lg')]: {
        bottom: '43%',
        left: '4%',
        transform: 'translate(-4%, -43%)',
      },
      [theme.breakpoints.down('md')]: {
        left: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '6%',
      },
    },
    error_show: {
      display: 'block',
    },
    shortenWrapper: {
      padding: '3rem 1rem',
    },
    copyButton: {
      textTransform: 'none',
      width: '96%',
      height: '2.5rem',
      backgroundColor: theme.palette.common.cyan,
      borderRadius: '5px',
      fontWeight: '500',
      fontSize: '1rem',
      // [theme.breakpoints.down('xl')]: {
      //   width: '6rem',
      // },
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: '3rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.common.darker_cyan,
      },
    },
    copyButtonClicked: {
      backgroundColor: theme.palette.primary.main,
    },
    shortenUrl: {
      color: theme.palette.common.cyan,
      textAlign: 'right !important',
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 0',
        textAlign: 'left !important',
      },
    },
    lineWrapper: {
      marginBottom: '1rem',
      [theme.breakpoints.down('xl')]: {
        marginBottom: '2rem',
      },
    },
    urlLinks: {
      fontSize: '1.4rem',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
  };
});

function ShortenItBlock(props) {
  const { classes } = useStyles();
  const [address, setAddress] = useState('');
  const [hover, setHover] = useState(false);
  const [error, setError] = useState(false);
  const theme = useTheme();
  // const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const cookieShortenUrls = props.shortenUrls
    ? JSON.parse(props.shortenUrls)
    : [];
  const [shortenUrls, setShortenUrls] = useState(cookieShortenUrls);
  const inputShortenItRef = useRef();

  function handleChange(event) {
    setAddress(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = inputShortenItRef.current.value;
    if (!url) {
      setError(true);
    } else {
      const existingUrl = shortenUrls.filter(
        (item) => item.original_link === url
      );

      if (existingUrl.length === 0) {
        const shortenUrl = await fetch('/api/shorten', {
          method: 'POST',
          body: JSON.stringify({
            long_url: url,
          }),
          header: {
            'Content-Type': 'application/json',
          },
        });
        const shortenUrlData = await shortenUrl.json();

        if (shortenUrlData?.error) {
          console.error(shortenUrlData.error);
        } else {
          const { full_short_link, original_link } = shortenUrlData;
          setShortenUrls([
            ...shortenUrls,
            { full_short_link, original_link, copied: false },
          ]);
        }
      }
    }
  }

  function handleClick(event) {
    event.preventDefault();
    setError(false);
  }

  function handleCopieButton(event, url) {
    const newshortenUrls = shortenUrls.map((item) => {
      if (item.original_link === url) {
        navigator.clipboard.writeText(item.full_short_link);
      }

      return {
        full_short_link: item.full_short_link,
        original_link: item.original_link,
        copied: item.original_link === url,
      };
    });
    setShortenUrls(newshortenUrls);
  }

  useEffect(() => {
    setAddress('');
  }, [shortenUrls]);

  return (
    <Grid item container className={classes.container} xs={12}>
      <Grid
        item
        container
        xs={12}
        // flexDirection={matchesLG ? 'column' : 'row'}
        justifyContent={matchesLG ? 'space-between' : 'center'}
        alignItems={matchesLG ? 'space-between' : 'center'}
        className={classes.formWrapper}
        component='form'
        onSubmit={async () => handleSubmit(event)}
      >
        <Grid item container lg={10} md={12} alignItems='flex-start'>
          <input
            id='shorten-it'
            type='url'
            placeholder='Shorten a link here...'
            className={cls(
              classes.textShortenIt,
              error && classes.textShortenIt_error
            )}
            onChange={handleChange}
            onClick={handleClick}
            value={address}
            ref={inputShortenItRef}
          />
        </Grid>
        <Grid item container lg={2} md={12} alignItems='flex-end'>
          <input
            type='submit'
            value='Shorten It!'
            className={cls(classes.button, hover && classes.buttonHover)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </Grid>
        <div className={cls(classes.error, error && classes.error_show)}>
          <i>Please add a link</i>
        </div>
      </Grid>
      <Grid item container className={classes.shortenWrapper}>
        {shortenUrls.map((url) => (
          <Grid
            item
            container
            key={url.full_short_link + url.original_link}
            className={classes.lineWrapper}
          >
            <Grid
              item
              container
              lg={7}
              xs={12}
              justifyContent='flex-start'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid item xs zeroMinWidth>
                <Typography
                  className={classes.urlLinks}
                  style={{ overflowWrap: 'break-word' }}
                >
                  {url.original_link}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg={4}
              xs={12}
              justifyContent={matchesLG ? 'flex-start' : 'flex-end'}
              alignItems='center'
            >
              <Grid item xs zeroMinWidth>
                <Typography
                  className={cls(classes.shortenUrl, classes.urlLinks)}
                  style={{ overflowWrap: 'break-word' }}
                >
                  {url.full_short_link}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg={1}
              xs={12}
              justifyContent='flex-end'
              alignItems='center'
              zeroMinWidth
            >
              {/* <Grid item xs zeroMinWidth> */}
              <Button
                variant='contained'
                disableRipple
                className={cls(
                  classes.copyButton,
                  url.copied && classes.copyButtonClicked
                )}
                onClick={() => handleCopieButton(event, url.original_link)}
              >
                {url.copied ? 'Copied!' : 'Copy'}
              </Button>
              {/* </Grid> */}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ShortenItBlock;
