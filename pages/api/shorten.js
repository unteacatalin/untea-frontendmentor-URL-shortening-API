// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { setTokenCookie } from '../../lib/cookies';

export default async function shorten(req, res) {
  try {
    if (req.method === 'POST') {
      const { long_url } = JSON.parse(req.body);
      const getShortenUrl = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${long_url}`
      );
      const shortenUrl = await getShortenUrl.json();
      if (shortenUrl.ok) {
        const { full_short_link, original_link } = shortenUrl.result;

        // set the cookie
        let myCookie = [];
        if (req.cookies?.shortenUrls) {
          myCookie = JSON.parse(req.cookies?.shortenUrls);
        }
        myCookie.push({ full_short_link, original_link });
        setTokenCookie(JSON.stringify(myCookie), res);

        res.status(200).json({ full_short_link, original_link });
      } else if (shortenUrl.error_code) {
        const error_code = shortenUrl.error_code;
        if (error_code === 1) {
          console.error('No URL specified (url parameter is empty)');
          res
            .status(500)
            .send({ error: 'No URL specified (url parameter is empty)' });
        } else if (error_code === 2) {
          console.error('Invalid URL submitted');
          res.status(500).send({ error: 'Invalid URL submitted' });
        } else if (error_code === 3) {
          console.error('Rate limit reached. Wait a second and try again');
          res
            .status(500)
            .send({ error: 'Rate limit reached. Wait a second and try again' });
        } else if (error_code === 4) {
          console.error(
            'IP-Address has been blocked because of violating our terms of service'
          );
          res.status(500).send({
            error:
              'IP-Address has been blocked because of violating our terms of service',
          });
        } else if (error_code === 5) {
          console.error('shrtcode code (slug) already taken/in use');
          res.status(500).send({
            error: 'shrtcode code (slug) already taken/in use',
          });
        } else if (error_code === 6) {
          console.error('Unknown error');
          res.status(500).send({
            error: 'Unknown error',
          });
        } else if (error_code === 7) {
          console.error('No code specified (code parameter is empty)');
          res.status(500).send({
            error: 'No code specified (code parameter is empty)',
          });
        } else if (error_code === 8) {
          console.error(
            'Invalid code submitted (code not found/there is no such short-link)'
          );
          res.status(500).send({
            error:
              'Invalid code submitted (code not found/there is no such short-link)',
          });
        } else if (error_code === 9) {
          console.error('Missing required parameters');
          res.status(500).send({
            error: 'Missing required parameters',
          });
        } else if (error_code === 10) {
          console.error('Trying to shorten a disallowed Link.');
          res.status(500).send({
            error: 'Trying to shorten a disallowed Link.',
          });
        } else {
          console.error(`Unknown server error (${error_code}).`);
          res.status(500).send({
            error: `Unknown server error (${error_code}).`,
          });
        }
      } else {
        console.error('Unknown server error.');
        res.status(500).send({
          error: 'Unknown server error.',
        });
      }
    } else {
      console.error('Bad request.');
      res.status(400).send({
        error: 'Bad request.',
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
}
