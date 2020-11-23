export const reducer = (state, action) => {
  switch(action.type) {
    case Types.ADD_SEAT:
      return {
        ...state,
        seats: [
          ...state.seats,
          action.data
        ]
      }
    case Types.REMOVE_SEAT:
      return {
        ...state,
        seats: state.seats.filter((seat) => seat.id !== action.data.id)
      }
    case Types.ADD_ITEM:
      return {
        ...state,
        seats: state.seats.map((seat) => {
          if (seat.id === action.seat.id)
        })
      }
    case Types.REMOVE_ITEM:
      return {
        ...state,
        seats: state.seats.filter((seat) => seat.id !== action.data.id)
      }
    default:
      return state
  }
}