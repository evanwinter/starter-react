import Types from "./_types"

export const initialState = {
  items: [
    {
      id: 1,
      title: "Sort by value",
      content:
        "Esse dolore do irure aute et duis in incididunt velit et reprehenderit qui amet Lorem. Nostrud laborum eu amet Lorem culpa et nulla dolor.",
      tags: ["javascript", "html"],
    },
    {
      id: 2,
      title: "Do something else",
      content: "Esse dolore do irure aute et duis.",
      tags: ["javascript"],
    },
    {
      id: 3,
      title: "Azure deployment issue",
      content:
        "To fix 'Target web app does not exist' error, I ran `az set --subscription 'Subscription Name'` to change my default subscription.",
      tags: ["azure", "maven", "spring", "java"],
    },
    {
      id: 4,
      title: "Sort by value",
      content:
        "Esse dolore do irure aute et duis in incididunt velit et reprehenderit qui amet Lorem. Nostrud laborum eu amet Lorem culpa et nulla dolor.",
      tags: ["javascript", "html"],
    },
    {
      id: 5,
      title: "Do something else",
      content: "Esse dolore do irure aute et duis.",
      tags: ["javascript"],
    },
    {
      id: 6,
      title: "Azure deployment issue",
      content:
        "To fix 'Target web app does not exist' error, I ran `az set --subscription 'Subscription Name'` to change my default subscription.",
      tags: ["azure", "maven", "spring", "java"],
    },
    {
      id: 7,
      title: "Sort by value",
      content:
        "Esse dolore do irure aute et duis in incididunt velit et reprehenderit qui amet Lorem. Nostrud laborum eu amet Lorem culpa et nulla dolor.",
      tags: ["javascript", "html"],
    },
    {
      id: 8,
      title: "Do something else",
      content: "Esse dolore do irure aute et duis.",
      tags: ["javascript"],
    },
    {
      id: 9,
      title: "Azure deployment issue",
      content:
        "To fix 'Target web app does not exist' error, I ran `az set --subscription 'Subscription Name'` to change my default subscription.",
      tags: ["azure", "maven", "spring", "java"],
    },
  ],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      }
    case Types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id),
      }
    default:
      return state
  }
}

export const actions = {
  addItem: (item) => ({ type: Types.ADD_ITEM, data: item }),
  removeItem: (item) => ({ type: Types.REMOVE_ITEM, data: item }),
}
