import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
        </Head>
        <body className=" 
        min-w-[50%] object-left -mr-96 overflow-x-hidden  
        
        sm:overflow-y-scroll sm:container sm:mx-auto sm:px-0 sm:mb-0  sm:pb-5 sm:min-w-full
        md:overflow-y-scroll md:container md:mx-auto md:px-0 md:mb-0  md:pb-5 md:min-w-full
        lg:overflow-y-scroll lg:container lg:mx-auto lg:px-0 lg:mb-0  lg:pb-5 lg:min-w-full
        
        2xl:object-right 
        3xl:w-1/12  
        
        ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
