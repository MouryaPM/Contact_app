const initialState = [
  {
    id: 1,
    name: "Pooja Mourya",
    phone: 9623798766,
    email: "pooja@mail.com",
  },
  {
    id: 2,
    name: "Neha Mourya",
    phone: 9623798768,
    email: "neha@mail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateContact = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateContact;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
