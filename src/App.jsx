import { LoggerProvider, SessionProvider } from "kumo-app";

import React from "react";

function App() {
  return (
    <LoggerProvider>
      <SessionProvider>
        <div>Test</div>
      </SessionProvider>
    </LoggerProvider>
  );
}

export default App;
