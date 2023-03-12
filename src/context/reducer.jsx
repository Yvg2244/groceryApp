const userInfo =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();
const cartInfo =
  localStorage.getItem("cart") !== "undefined"
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
export const initialState = {
  user: userInfo,
  cart: cartInfo?cartInfo:[],
  userCategory:null,
  showCart:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_CART":
        return {
          ...state,
          cart: action.cart,
        };
        case "SET_USER_CATEGORY":
        return {
          ...state,
          userCategory: action.userCategory,
        };
        case "SET_SHOW_CART":
        return {
          ...state,
          showCart: action.showCart,
        };
    default:
      return state;
  }
};
export default reducer;
