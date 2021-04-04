export type ProductPayload = {
  __typename?: string;
  name: string;
  pic: string;
  price: string;
  total: number;
};

export type CategoryPayload = {
  __typename?: string;
  name: string;
  description: string;
  image: string;
  status: string;
  products: ProductPayload[];
};

export type CategoryListPayload = {
  __typename?: string;
  categories: CategoryPayload[];
};

export type CartProductsPayload = {
  __typename?: string;
  product: ProductPayload;
  size: string;
  quantity: number;
};

export type CartPayload = {
  __typename?: string;
  cart: {
    list: CartProductsPayload[];
    __typename?: string;
  };
};

export type UserInformation = {
  __typename?: string;
  fullname: string | null;
  address: string | null;
};

export type UserPayload = {
  user: {
    userInfo: UserInformation | null;
    __typename?: string;
  };
};
