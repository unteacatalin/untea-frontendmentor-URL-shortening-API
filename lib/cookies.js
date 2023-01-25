import cookie from 'cookie';

const MAX_AGE = 5 * 60;

export const setTokenCookie = (shortenUrls, res) => {
  const setCookie = cookie.serialize('shortenUrls', shortenUrls, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  res.setHeader('Set-Cookie', setCookie);
};
