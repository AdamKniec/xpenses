import { Alert, Button, ListGroup } from "react-bootstrap";
import { ListProps } from "./List.types";

const List = (props: ListProps) => {
  const { setModalVisible, setIdToBeRemoved, data } = props;
  const handleDeleteClick = (id: number) => {
    setModalVisible(true);
    setIdToBeRemoved(id);
  };
  return (
    <ListGroup>
      {data.length ? (
        data.map((item) => {
          const { productOrService, whoPaid, price, herShare, hisShare, id } =
            item;
          return (
            <ListGroup.Item
              className="d-flex justify-content-between mb-4"
              key={id}
            >
              <span>Za co: {productOrService}</span>
              <span>Kto płacił: {whoPaid}</span>
              <span>Cena: {price}</span>
              <span className={`${whoPaid === "Adam" && "text-warning"}`}>
                Dług K: {herShare}
              </span>
              <span className={`${whoPaid === "Klaudia" && "text-warning"}`}>
                Dług A: {hisShare}
              </span>
              <Button
                variant="danger"
                className="pull-right"
                size="sm"
                onClick={() => handleDeleteClick(id)}
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
