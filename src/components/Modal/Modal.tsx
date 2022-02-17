import { Button, Modal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  handleDeleteModalConfirm: () => void;
}

export const ModalWrapper = (props: ModalProps) => {
  const { onHide, show, handleDeleteModalConfirm } = props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Usuwanie</Modal.Title>
      </Modal.Header>
      <Modal.Body>Czy na pewno chcesz usunąć ten element?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Nie
        </Button>
        <Button variant="primary" onClick={handleDeleteModalConfirm}>
          Tak
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
