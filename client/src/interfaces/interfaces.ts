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

export interface User {
  _id: string;
  username?: string;
  email: string;
  accessToken: string;
}

export interface AuthData {
  email: string;
  _id: string;
  accessToken: string;
}

export interface AuthContextType {
  user: AuthData;
  userLogin: (authData: AuthData) => void;
  userLogout: () => void;
  isAuthenticated: boolean;
}
