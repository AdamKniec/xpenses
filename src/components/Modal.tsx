import { Button, Modal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  handleDeleteModalConfirm: () => void;
}

export const ModalWrapper = (props: ModalProps) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleDeleteModalConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
