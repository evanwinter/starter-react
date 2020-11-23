import { v4 as uuid } from "uuid"

export const initState = {
  options: {
    taxPercent: 0.25,
    tipPercent: 0.25,
  },
  totals: {
    grandTotal: 0,
    tipTotal: 0,
    taxTotal: 0,
  },
  seats: [
    {
      id: uuid(),
      name: "Seat 1",
      itemsTotal: 17.0,
      percentOfBill: 0.1,
      items: [
        {
          name: "Chicken Biryani",
          price: 14.0,
          split: null,
        },
        {
          name: "Garlic Naan",
          price: 3.0,
          split: null,
        },
      ],
    },
    {
      id: uuid(),
      name: "Seat 2",
      itemsTotal: 11.0,
      percentOfBill: 0.1,
      items: [
        {
          name: "Pav Bhamati",
          price: 11.0,
          split: null,
        },
      ],
    },
    {
      id: uuid(),
      name: "Seat 3",
      itemsTotal: 18.0,
      percentOfBill: 0.1,
      items: [
        {
          name: "Paneer Butter Masala",
          price: 15.0,
          split: null,
        },
        {
          name: "Garlic Naan",
          price: 3.0,
          split: null,
        },
      ],
    },
  ],
}

const addSeat = (state, action) => ({
  ...state,
  seats: [
    ...state.seats,
    action.seat
  ]
})

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_SEAT:
      return {
        ...state,
        seats: [...state.seats, action.data],
      }
    case Types.REMOVE_SEAT:
      return {
        ...state,
        seats: state.seats.filter((seat) => seat.id !== action.data.id),
      }
    
    default:
      return state
  }
}

export const Actions = {
  addItem: (item = {}, seat = {}) => ({
    type: Types.ADD_ITEM,
    item: item,
    seat: seat,
  }),

  removeItem: (item = {}, seat = {}) => ({
    type: Types.REMOVE_ITEM,
    item: item,
    seat: seat,
  }),

  addSeat: (seat = {}, items = []) => ({
    type: Types.ADD_SEAT,
    seat: seat,
  }),

  removeSeat: (seat = {}) => ({
    type: Types.REMOVE_SEAT,
    seat: seat,
  }),

  addBill: (bill = {}) => ({
    type: Types.ADD_BILL,
    bill: bill,
  }),

  removeBill: (bill = {}) => ({
    type: Types.REMOVE_BILL,
    bill: bill,
  }),
}
