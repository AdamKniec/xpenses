import { Button, Form } from "react-bootstrap";

const ExpensesForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Ile</Form.Label>
          <Form.Control type="number" placeholder="Wpisz kwotę" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Za co</Form.Label>
          <Form.Control type="product" placeholder="Nazwa produktu / usługi" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExpensesForm;
