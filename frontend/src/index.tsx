import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App/App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider
        domain="mehraj-randhawa.eu.auth0.com"
        clientId="nc7RmuwHSwrWjLFCaaJflyWai7iAtXJD"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>
);
