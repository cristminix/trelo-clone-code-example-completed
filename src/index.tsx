// import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { DndProvider } from "react-dnd"
// import Backend from "react-dnd-html5-backend"
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AppStateProvider } from "./AppStateContext"

const rootEl = document.getElementById("root") as any
const root = ReactDOM.createRoot(rootEl);

root.render(
  <DndProvider backend={HTML5Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>
)
