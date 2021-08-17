// export enum ItemSteps {
//   itemTitle = 'itemTitle',
//   itemDescription = 'itemDescription',
//   itemValue = 'itemValue'
// }
//
// export interface ItemObject {
//   images: string[];
//   title: string;
//   rent_rate: number;
//   description: string;
//   lend_for_free: boolean;
//   item_cost: number;
//   other_information: string;
//   service_date: Date;
//   insured: boolean;
//   category: string;
// }

export interface RequestItemObject {
  title?: '',
  user?: {},
  description?: '',
  images?: string[],
  item_deleted?: boolean
};
