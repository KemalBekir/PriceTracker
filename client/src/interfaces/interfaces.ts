export interface Price {
  _id: string;
  price: number;
  createdAt: Date;
}

export interface ItemProps {
  _id: string;
  url: string;
  itemName: string;
  prices: Price[];
  img: string;
}

export interface DataProps {
  data: ItemProps | null;
}
