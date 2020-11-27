import React from "react"
import { Link } from "@reach/router"

const ListItem = ({ item }) => {
  return (
    <Link className="Item" to={`/${item.id}`}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <div className="d-flex">
        {item.tags.map((tag) => (
          <span key={tag} className="mr-2">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default ListItem
