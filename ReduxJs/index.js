import { createStore } from "redux";

//Store
const store = createStore(reducer);

//Reducer

function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //Immutability
    return { amount: state.amount + 1 };
  }
  return state;
}

//Global state
console.log(store.getState());

store.dispatch({
  type: "increment",
});
console.log(store.getState());
