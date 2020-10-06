import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo';
import App from "./App";

//client declaration connect to GraphQL
const client = new ApolloClient({
  uri: 'https://api.chucknorris.io/jokes/categories'
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  //Setting Up connection for Chuck Norris API
  //wrapping App within API
  <ApolloProvider client ={client}>
  <App />
  </ApolloProvider>,
  rootElement



  //old generated code from create-react-app
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
ServiceWorker.unregister();