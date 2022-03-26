import "lib/styles/globals.css";
import { Provider } from "mobx-react";
import type { AppProps } from "next/app";

import { useInitializeStore } from "@lib/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const { initialState, ...rest } = pageProps;
  const store = useInitializeStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...rest} />;
    </Provider>
  );
}

export default MyApp;
