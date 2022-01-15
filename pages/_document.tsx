import Document, { DocumentContext, Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="fonts" />
          <link rel="preload" href="/fonts/IBMPlexSans-Medium.ttf" as="fonts" />
          <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="fonts" />
          <link rel="preload" href="/fonts/IBMPlexSans-SemiBold.ttf" as="fonts" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
