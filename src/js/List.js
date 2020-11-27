import React from "react"
import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <ul className="List">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default List
