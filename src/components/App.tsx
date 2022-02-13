import { Container } from "react-bootstrap";

import ExpensesForm from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import React, { useReducer, useState } from "react";
import { reducer } from "../AppReducer";

const initialState = {
  listData:
    [
      { productOrService: "Czynsz", price: 1000, id: 1, whoPaid: "Adam" },
      { productOrService: "Zakupy", price: 23, id: 2, whoPaid: "Adam" },
      { productOrService: "Prezent", price: 44, id: 3, whoPaid: "Adam" },
      { productOrService: "Restauracja", price: 53, id: 4, whoPaid: "Adam" },
    ] || [],
};

function App() {
  const [formValues, setFormValues] = useState({
    price: 0,
    formBasicCheckbox: true,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

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
