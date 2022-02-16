export const reducer = (
  state: {
    listData: {
      productOrService: string;
      price: number;
      id: number;
      whoPaid: "Adam";
      hisShare: number;
      herShare: number;
      formBasicCheckbox: boolean;
    }[];
  },
  action: { type: string; payload: any }
) => {
  console.log(action.payload);
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
