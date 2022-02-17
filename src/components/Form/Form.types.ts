import { SetStateAction } from "react";
export interface FormProps {
  setFormValues: {} | SetStateAction<{}>;
  addNewListItem: (type: string) => void;
}

// TODO -> MAKE USE OF THE ABOVE INTERFACE
