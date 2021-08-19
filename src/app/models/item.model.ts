export enum ItemSteps {
  itemTitle = 'itemTitle',
  itemDescription = 'itemDescription',
  itemValue = 'itemValue'
}

export enum ItemAvailability {
  'public' = 'public',
  'private' = 'private'
}

export interface ItemObject {
  _id?: string;
  image: string;
  images?: string[];
  title: string;
  type: string;
  showlisting: string;
  rent_rate?: number; // per day
  rent_rate_per_week?: number;
  rent_rate_per_month?: number; // 28 days
  description: string;
  lend_for_free: boolean;
  item_cost: number;
  item_receipt: string;
  other_information: string;
  service_date: Date;
  insured: boolean;
  category: string;
  location: string;
  availability?: ItemAvailability;
}

export interface IItemResponseObject {
  _id: string;
  item: ItemObject;
}
