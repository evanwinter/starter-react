import React from "react"
import { Link } from "@reach/router"

const ItemDetailPage = ({ itemId }) => {
  return (
    <div>
      <Link to="/">Back to list</Link>
      <h1>Item detail page</h1>
      <code>{itemId}</code>
    </div>
  )
}

export default ItemDetailPage
