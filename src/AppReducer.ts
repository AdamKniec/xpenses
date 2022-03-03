export const reducer = (
  state: initialStateModel,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "addNewItem": // small refactor below would be nice
      return {
        ...state,
        listData: [...state.listData, action.payload],
      };

    case "removeListItem":
      return {
        ...state,
        listData: state.listData.filter((listItem) => {
          return listItem.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

interface initialStateModel {
  listData: {
    productOrService: string;
    price: number;
    id: number;
    whoPaid: string;
    hisShare: number;
    herShare: number;
    formBasicCheckbox: boolean;
  }[];
}
