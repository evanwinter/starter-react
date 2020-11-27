import React, { useReducer, useState } from "react"
import { actions, initialState, reducer } from "./state"
import { Router, Link } from "@reach/router"

import ListPage from "./pages/ListPage"
import ItemDetailPage from "./pages/ItemDetailPage"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const startAddItem = (event) => {}

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Lorem Ipsum</Link>
        </nav>
      </header>
      <main className="container">
        <Router>
          <ListPage items={state.items} path="/" />
          <ItemDetailPage path="/:itemId" />
        </Router>
      </main>
      <button id="add-item-button" onClick={startAddItem}>
        +
      </button>
    </div>
  )
}

export default App
