import Head from 'next/head';

import HeroBlock from '../components/home/hero-block';
import ShortenItBlock from '../components/home/shorten-it-block';
import CallToActionBlock from '../components/home/call-to-action-block';
import Layout from '../components/ui/layout';

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>URL shortening API</title>
        <meta name='description' content='URL shortening API' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HeroBlock />
      <ShortenItBlock shortenUrls={props?.shortenUrls} />
      <CallToActionBlock />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const shortenUrls = context.req?.cookies?.shortenUrls || '';
  return {
    props: { shortenUrls },
  };
}
