// item-types.ts
export interface ItemType {
  id: number;
  name: string;
  price: number;
}

export interface CartType extends ItemType {
  quantity: number;
}
