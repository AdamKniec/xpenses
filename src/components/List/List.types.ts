export interface ListProps {
  data: {
    productOrService: string;
    price: number;
    id: number;
    whoPaid: string;
    hisShare: number;
    herShare: number;
  }[];
  setIdToBeRemoved: (value: number) => void;
  setModalVisible: (modalVisible: boolean) => void;
}
