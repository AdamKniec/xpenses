export interface ListProps {
  data: {
    productOrService: string;
    price: number;
    id: number;
    whoPaid: string;
  }[];
  setIdToBeRemoved: (value: number) => void;
  setModalVisible: (modalVisible: boolean) => void;
}
