import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="SP-NDt1OTP6iZ_yeFKjE-GXkC6GXnJ-Cp-KSmbARGTc" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/bg1.png" />
        <link rel="preload" as="image" href="/bg2.png" />
        <link rel="preload" as="image" href="/bg3.png" />
        <link rel="preload" as="image" href="/bg4.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
