export interface NewOrder {
  userId: number;
  products: Array<number>;
}

export interface Order extends NewOrder {
  id: number;
}

export interface OrderObject {
  order: NewOrder;
}

export interface OrderTable {
  id: string,
  userId: string,
}