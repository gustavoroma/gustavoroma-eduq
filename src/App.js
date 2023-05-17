import React from "react";
import "./styles.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ListPersons from "./ListPersons";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2 className="title">Gustavo Roma - EduQ</h2>
      <div id="container">
        <ListPersons />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
