import { Alert, Button, ListGroup } from "react-bootstrap";
import { ListProps } from "./List.types";

const List = (props: ListProps) => {
  const handleDeleteClick = (id: number) => {
    props.setModalVisible(true);
    props.setIdToBeRemoved(id);
  };
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
              {item.whoPaid}
              <Button
                variant="danger"
                className="pull-right"
                size="sm"
                onClick={() => handleDeleteClick(item.id)}
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
