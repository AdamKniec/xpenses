import { Alert, Button, ListGroup } from "react-bootstrap";
import { ListProps } from "./List.types";

const List = (props: ListProps) => {
  return (
    <ListGroup>
      {props.data.length ? (
        props.data.map((item) => {
          return (
            <ListGroup.Item
              className="d-flex justify-content-between mb-4"
              key={item.id}
            >
              {item.productOrService}
              <Button
                variant="danger"
                className="pull-right"
                size="sm"
                onClick={(e) => props.removeListItem(e, item.id)}
              >
                Delete
              </Button>{" "}
            </ListGroup.Item>
          );
        })
      ) : (
        <Alert variant="success"> R O Z L I C Z E N I </Alert>
      )}
    </ListGroup>
  );
};

export default List;
