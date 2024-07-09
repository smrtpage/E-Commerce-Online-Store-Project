// Types for User
export interface UserState {
  username: string;
  password: string | number;
  avatarImg: string;
  authUser: boolean;
}

export interface RootState {
  auth: {
    user: UserState;
  };
  cart: CartState;
}

// Type For Product
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Type For Cart
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  totalPrice: number;
}

export interface Cart {
  cart: CartItem[];
  totalAmount: number;
  totalPrice: number;
}

export interface CartState {
  cart: CartItem[];
  totalAmount: number;
  totalPrice: number;
}
