import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App/App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="mehraj-randhawa.eu.auth0.com"
        clientId="nc7RmuwHSwrWjLFCaaJflyWai7iAtXJD"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
