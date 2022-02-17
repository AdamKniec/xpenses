import { Container } from "react-bootstrap";

import ExpensesForm from "./Form/Form";
import { ModalWrapper as Modal } from "./Modal/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List/List";
import { useReducer, useState } from "react";
import { reducer } from "../AppReducer";

const initialState = {
  listData:
    [
      {
        productOrService: "Czynsz",
        price: 1000,
        id: 1,
        whoPaid: "Klaudia",
        hisShare: 0,
        herShare: 0,
        formBasicCheckbox: true,
      },
    ] || [],
};

function App() {
  const [formValues, setFormValues] = useState({
    price: 0,
    formBasicCheckbox: true,
    productOrService: "",
    hisShare: 0,
    herShare: 0,
    whoPaid: "Klaudia",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [idToBeRemoved, setIdToBeRemoved] = useState<number>();

  const calculateShare = (
    whoPaid: string,
    price: number,
    halfSplit: boolean,
    hisShare: number,
    herShare: number
  ) => {
    if (halfSplit) {
      return price / 2;
    }
    if (!halfSplit) {
      if (whoPaid === "Adam") {
        return herShare;
      }
      return hisShare;
    }
  };
  const addNewListItem = (e: any) => {
    e.preventDefault();
    const prepareData = (formValues: any) => {
      const { product, price, formBasicCheckbox, hisShare, herShare, whoPaid } =
        formValues;

      return {
        productOrService: product,
        price,
        formBasicCheckbox,
        id: Math.random(),
        hisShare:
          (whoPaid === "Klaudia" &&
            calculateShare(
              whoPaid,
              price,
              formBasicCheckbox,
              hisShare,
              herShare
            )) ||
          0,
        herShare:
          (whoPaid === "Adam" &&
            calculateShare(
              whoPaid,
              price,
              formBasicCheckbox,
              hisShare,
              herShare
            )) ||
          0,

        whoPaid,
      };
    };

    dispatch({ type: "addNewItem", payload: prepareData(formValues) }); // TODO not all values are necessary
  };

  const handleModalHide = () => {
    setModalVisible(false);
  };

  const handleDeleteModalConfirm = () => {
    dispatch({ type: "removeListItem", payload: idToBeRemoved });
    setModalVisible(false);
  };

  return (
    <>
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>Xpenses</h1>
          </header>
          <ExpensesForm
            setFormValues={setFormValues}
            allowSplit={formValues.formBasicCheckbox}
            addNewListItem={addNewListItem}
          />
        </div>
      </Container>
      <Container className="mt-5">
        <Modal
          show={modalVisible}
          onHide={handleModalHide}
          handleDeleteModalConfirm={handleDeleteModalConfirm}
        />
        <List
          data={state.listData}
          setModalVisible={setModalVisible}
          setIdToBeRemoved={setIdToBeRemoved}
        />
      </Container>
    </>
  );
}

export default App;
