import { Button, Form } from "react-bootstrap";

// TODO -> Get Rid of any
const ExpensesForm = (props: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFormValues((prevState: {}) => {
      if (e.target.id === "formBasicCheckbox") {
        return {
          ...prevState,
          formBasicCheckbox: e.target.checked,
        };
      }
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Ile</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wpisz kwotę"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="50/50"
            onChange={handleChange}
            checked={props.allowSplit}
          />
        </Form.Group>
        {!props.allowSplit && (
          <>
            <Form.Group className="mb-3" controlId="herShare">
              <Form.Label>K</Form.Label>
              <Form.Control
                type="number"
                placeholder="Wpisz kwotę"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hisShare">
              <Form.Label>A</Form.Label>
              <Form.Control
                type="number"
                placeholder="Wpisz kwotę"
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )}

        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Za co</Form.Label>
          <Form.Control
            type="product"
            placeholder="Nazwa produktu / usługi"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExpensesForm;
