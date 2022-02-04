import { Container, ListGroup } from "react-bootstrap";

import ExpensesForm from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>Xpenses</h1>
          </header>
          <ExpensesForm />
        </div>
      </Container>
      <Container className="mt-5">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" disabled>
            Link 2
          </ListGroup.Item>
          <ListGroup.Item>This one is a button</ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}

export default App;
