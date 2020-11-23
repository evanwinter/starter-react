import React, { Fragment, useState } from "react"

const Dialog = ({ seat }) => {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  const clear = () => {}
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting...")
  }
  
  const handleCancel = () => {
    console.log("Cancelling...")
    clear()
    setShow(false)
  }

  const saveItem = () => {

  }

  return (
    <Fragment>
      <div className="Dialog fixed fullscreen z-2" data-show={show}>
        <div className="relative">
          <form className="container py-2" onSubmit={handleSubmit}>
            <h2>Add/edit a seat</h2>
            
            <div className="form-field">
              <label className="d-block" htmlFor="name">Name:</label>
              <input id="name" type="text" />
            </div>
            <div className="form-field">
              <label className="d-block" htmlFor="name">Items:</label>
              <div>
                {items.length > 0 ? items.map((item) => <div>{item.name}</div>)
                                  : <small className="text-muted">No items addedd</small>}
              </div>
              <button className="sm my-1" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#addItemCollapse" 
                      aria-hidden="false" 
                      aria-label="addItemCollapse">
                + New item
              </button>
              <div className="collapse content mt-1" id="addItemCollapse">
                <div className="form-field">
                  <label className="d-block" htmlFor="item-name">Name:</label>
                  <input id="item-name" type="text" />
                </div>
                <div className="form-field">
                  <label className="d-block" htmlFor="item-cost">Cost:</label>
                  <input id="item-cost" type="text" />
                </div>
                
                <button className="sm mt-1" type="button" onClick={saveItem}>Save Item</button>
              </div>
            </div>
          </form>

          <div className="button-group z-3 fixed bottom w-100">
            <button type="submit"
                    onClick={handleSubmit}
                    className="w-50">
              Save
            </button>
            <button type="button"
                    className="w-50"
                    onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button className="AddSeat--button fixed bottom w-100" onClick={() => setShow(true)} type="button">
        Add Seat
      </button>
    </Fragment>
  )
}

export default Dialog