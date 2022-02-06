import { Container } from "react-bootstrap";

import ExpensesForm from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { useState } from "react";

const DUMMY_DATA =
  [
    { productOrService: "Czynsz", price: 1000, id: 1 },
    { productOrService: "Zakupy", price: 23, id: 2 },
    { productOrService: "Prezent", price: 44, id: 3 },
    { productOrService: "Restauracja", price: 53, id: 4 },
  ] || [];

function App() {
  const [formValues, setFormValues] = useState();

  return (
    <>
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>Xpenses</h1>
          </header>
          <ExpensesForm setFormValues={setFormValues} />
        </div>
      </Container>
      <Container className="mt-5">
        <List data={DUMMY_DATA} />
      </Container>
    </>
  );
}

export default App;
