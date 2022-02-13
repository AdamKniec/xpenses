export const reducer = (
  state: {
    listData: {
      productOrService: string;
      price: number;
      id: number;
      whoPaid: "Adam";
    }[];
  },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "addNewItem": // small refactor below would be nice
      return {
        ...state,
        listData: [
          ...state.listData,
          {
            productOrService: action.payload.product,
            price: action.payload.price,
            id: Math.random(),
            whoPaid: action.payload.whoPaid,
          },
        ],
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
