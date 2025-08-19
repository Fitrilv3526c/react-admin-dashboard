export interface OrderItemType {
  name: string;
  photo: string;
  price: number;
  qunatity: number;
  _id: string;
}

export interface OrderType {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status: "Processing" | "Shipped" | "Delievred";
  subTotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
  _id: string;
}
