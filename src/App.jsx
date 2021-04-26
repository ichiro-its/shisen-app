import { Container } from "@material-ui/core";
import React from "react";
import { LoggerProvider, SessionProvider } from "kumo-app";

import SubscriptionImageTopic from "./components/SubscriptionImageTopic";

function App() {
  return (
    <LoggerProvider>
      <SessionProvider>
        <Container maxWidth="sm">
          <SubscriptionImageTopic />
        </Container>
      </SessionProvider>
    </LoggerProvider>
  );
}

export default App;
