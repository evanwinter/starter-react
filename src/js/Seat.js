import React from "react"

const Seat = ({ seat }) => {
  const enable = (e) => {
    Array.from(document.querySelectorAll(`[data-seat-id="${seat.id}"] .toggle-container input`)).forEach(input => input.disabled = true)
    e.target.disabled = false
  }

  return (
    <div className="Seat" data-seat-id={seat.id}>
      <div className="container d-flex justify-between align-center py-2 toggle-trigger"
           data-toggle
           data-target={seat.id}>
        <h4>{seat.name}</h4>
        <div className="row">
          <small className="mr-2 text-muted">{seat.items.length} items</small>
          <small className="mr-2">${seat.itemsTotal}</small>
          <small>0%</small>
        </div>
      </div>
      <div className="items">
        <div className="container toggle-container mb-1" data-id={seat.id}>
          {seat.items.map((item) => {
            return (
              <div className="item row py-1" key={item.name} onClick={enable}>
                <input className="col col-10" type="text" disabled value={item.name} />
                <input className="col col-2 text-center" type="text" disabled value={item.price} />
              </div>
            )
          })}
          <a href="#">
            <small>Add item</small>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Seat