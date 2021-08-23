import { Container, Grid } from "@material-ui/core";
import React from "react";
import { LoggerProvider, SessionProvider } from "kumo-app";

import SubscriptionImageTopic from "./components/SubscriptionImageTopic";
import CaptureSettings from "./components/CaptureSettings";

function App() {
  return (
    <LoggerProvider>
      <SessionProvider>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <SubscriptionImageTopic />
            </Grid>
            <Grid item lg={6}>
              <CaptureSettings />
            </Grid>
          </Grid>
        </Container>
      </SessionProvider>
    </LoggerProvider>
  );
}

export default App;
