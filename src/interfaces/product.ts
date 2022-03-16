export interface NewProduct {
  name: string;
  amount: string;
}
  
export interface Product extends NewProduct {
  id: number;
}

export interface ProductOrder {
  id: number;
  userId: number;
  orderId: number;
}