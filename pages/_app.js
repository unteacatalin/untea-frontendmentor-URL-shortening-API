import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import '../styles/globals.css';
import theme from '../components/ui/theme';
import createEmotionCache from '../src/createEmotionCache';
import { URLShorteningProvider } from '../store/url-context';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <URLShorteningProvider>
          <Component {...pageProps} />
        </URLShorteningProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
