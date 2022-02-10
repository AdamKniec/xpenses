import { Container } from "react-bootstrap";

import ExpensesForm from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import React, { useReducer, useState } from "react";

const initialState = {
  listData:
    [
      { productOrService: "Czynsz", price: 1000, id: 1 },
      { productOrService: "Zakupy", price: 23, id: 2 },
      { productOrService: "Prezent", price: 44, id: 3 },
      { productOrService: "Restauracja", price: 53, id: 4 },
    ] || [],
};
const reducer = (
  state: {
    listData: { productOrService: string; price: number; id: number }[];
  },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "addNewItem": // small refactor below would be nice
      return {
        ...state,
        listData: [
          ...state.listData,
          {
            productOrService: action.payload.product,
            price: action.payload.price,
            id: Math.random(),
          },
        ],
      };

    case "removeListItem":
      return {
        ...state,
        listData: state.listData.filter((listItem) => {
          return listItem.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

function App() {
  const [formValues, setFormValues] = useState({
    price: 0,
    formBasicCheckbox: true,
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addNewListItem = (e: any) => {
    e.preventDefault();
    dispatch({ type: "addNewItem", payload: formValues }); // TODO not all values are necessary
  };

  // TODO REMOVE ANY
  const removeListItem = (e: React.MouseEvent, id: number) => {
    console.log(id);
    e.preventDefault();
    dispatch({ type: "removeListItem", payload: id }); // TODO not all values are necessary
  };

  return (
    <>
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>Xpenses</h1>
          </header>
          <ExpensesForm
            setFormValues={setFormValues}
            allowSplit={formValues.formBasicCheckbox}
            addNewListItem={addNewListItem}
          />
        </div>
      </Container>
      <Container className="mt-5">
        <List data={state.listData} removeListItem={removeListItem} />
      </Container>
    </>
  );
}

export default App;
