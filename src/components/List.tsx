import { Alert, Button, ListGroup } from "react-bootstrap";
import { ListProps } from "./List.types";

const List = (props: ListProps) => {
  console.log(props);
  const handleDeleteClick = (id: number) => {
    props.setModalVisible(true);
    props.setIdToBeRemoved(id);
  };
  return (
    <ListGroup>
      {props.data.length ? (
        props.data.map((item) => {
          console.log(item);
          return (
            <ListGroup.Item
              className="d-flex justify-content-between mb-4"
              key={item.id}
            >
              <span>Za co: {item.productOrService}</span>
              <span>Kto płacił: {item.whoPaid}</span>
              <span>Cena: {item.price}</span>
              <span className={`${item.whoPaid === "Adam" && "text-warning"}`}>
                Dług K: {item.hisShare}
              </span>
              <span
                className={`${item.whoPaid === "Klaudia" && "text-warning"}`}
              >
                Dług A: {item.herShare}
              </span>
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
