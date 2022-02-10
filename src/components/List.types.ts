import React from "react";

export interface ListProps {
  data: { productOrService: string; price: number; id: number }[];
  removeListItem: (e: React.MouseEvent, id: number) => void; // TODO REMOVE ANY
}
