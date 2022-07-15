import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from "next-auth/react";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydrateState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    // </SessionProvider>
  );
}

export default MyApp;
