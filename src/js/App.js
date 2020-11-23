import React, { useReducer } from "react"
import { initialState, reducer } from "./state"
import Bill from "./Bill"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState)

	return (
		<Bill state={state} />
	)
}

export default App