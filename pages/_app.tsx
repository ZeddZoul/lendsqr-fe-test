import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ComponentType, ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    pageLayout?: ComponentType<{ children?: ReactNode }>;
  };
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  <Head>
    <title>Lendsqr-fe-test | Wisdom Adele</title>
    <link
      rel="shortcut icon"
      type="image/svg"
      href="@/public/icons/favicon.svg"
    />
  </Head>;
  const router = useRouter();
  let comp = Component.pageLayout ? (
    <>
      {" "}
      <Component.pageLayout>
      <Component key={router.asPath} {...pageProps} />
      </Component.pageLayout>
    </>
  ) : (
    <Component {...pageProps} />
  );
  return comp;
}
export default App;
