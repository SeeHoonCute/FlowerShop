import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          body: {
            margin: 0,
          }
        }),
        primaryColor: "pink",
      }}
    >
      <App/>
    </MantineProvider>
  </React.StrictMode>,
)
