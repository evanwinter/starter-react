import React, { useEffect, useRef, useState } from "react"
import List from "../List"

const ListPage = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef(undefined)

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const filterByQuery = (items, query) =>
    items.filter(
      (item) =>
        !query ||
        [...item.tags, item.title, item.content].some(
          (attr) => attr.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    )

  return (
    <div className="ListPage">
      <form>
        <label htmlFor="search">Find something...</label>
        <input
          id="search"
          type="text"
          ref={searchRef}
          onChange={(event) => setSearchQuery(event.currentTarget.value)}
          value={searchQuery}
        />
      </form>
      <List items={filterByQuery(items, searchQuery)} />
    </div>
  )
}

export default ListPage
