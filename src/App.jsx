import React from "react";
import { LoggerProvider, SessionProvider } from "kumo-app";
import SubscriptionImageTopic from "./components/SubscriptionImageTopic";

function App() {
  return (
    <LoggerProvider>
      <SessionProvider>
        <SubscriptionImageTopic />
      </SessionProvider>
    </LoggerProvider>
  );
}

export default App;
