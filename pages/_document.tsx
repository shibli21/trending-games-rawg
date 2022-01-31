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
          <link rel="preload" href="/fonts/Poppins-Bold.ttf" as="font" />
          <link rel="preload" href="/fonts/Poppins-Medium.ttf" as="font" />
          <link rel="preload" href="/fonts/Poppins-Regular.ttf" as="font" />
          <link rel="preload" href="/fonts/Poppins-SemiBold.ttf" as="font" />
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
