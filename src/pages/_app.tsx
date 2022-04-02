import "lib/styles/globals.css";
import { Provider } from "mobx-react";
import type { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";

import { useInitializeStore } from "@lib/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const { initialState, session, ...rest } = pageProps;
  const store = useInitializeStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <AuthProvider session={session}>
        <Component {...rest} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
