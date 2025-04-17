import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta
          name='description'
          content='TV Bland - TV Show and web series database'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preconnect'
          href='https://api.tvmaze.com'
          crossOrigin='anonymous'
        />
        {/* Preload critical fonts */}
        <link
          rel='preload'
          href='/fonts/main-font.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        {/* Add preloads for key assets like star icon and logo */}
        <link
          rel='preload'
          href='/icons/star.svg'
          as='image'
          type='image/svg+xml'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
