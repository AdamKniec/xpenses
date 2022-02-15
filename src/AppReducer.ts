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
        listData: [
          ...state.listData,
          {
            productOrService: action.payload.product,
            price: action.payload.price,
            id: Math.random(),
            whoPaid: action.payload.whoPaid,
            hisShare: action.payload.hisShare,
            herShare: action.payload.herShare,
            formBasicCheckbox: action.payload.formBasicCheckbox, // Czy to bedzie potrzebne tutaj?
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
