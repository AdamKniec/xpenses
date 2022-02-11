import { Container } from "react-bootstrap";

import ExpensesForm from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { useReducer, useState } from "react";

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
    dispatch({ type: "addNewItem", payload: formValues }); // not all values are necessary
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
        <List data={state.listData} />
      </Container>
    </>
  );
}

export default App;
