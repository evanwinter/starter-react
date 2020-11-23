import Types from "types"

export const actions = {
  addItem:    (item) => ({ type: Types.ADD_ITEM,    data: item }),
  removeItem: (item) => ({ type: Types.REMOVE_ITEM, data: item }),
  addSeat:    (seat) => ({ type: Types.ADD_SEAT,    data: seat }),
  removeSeat: (seat) => ({ type: Types.REMOVE_SEAT, data: seat }),
  addBill:    (bill) => ({ type: Types.ADD_BILL,    data: bill }),
  removeBill: (bill) => ({ type: Types.REMOVE_BILL, data: bill }),
}