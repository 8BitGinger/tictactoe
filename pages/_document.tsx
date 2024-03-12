import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="backer">
      <Head />
      <body className="overlay">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
