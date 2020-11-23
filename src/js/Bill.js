import React from "react"
import Dialog from "./Dialog"
import Seat from "./Seat"

const Bill = ({ state }) => {
  return (
    <section>
      <h1 className="container my-2">
        Spice Room
      </h1>

      <div className="seats">
        {state.seats.sort((a, b) => b.itemsTotal - a.itemsTtotal)
                    .map((seat)  => <Seat seat={seat} key={seat.id} />)}
      </div>

      <div className="w-100 fixed bottom left">
        <Dialog />
      </div>
		</section>
  )
}

export default Bill