

import {IEvent} from '../shared/index';

export interface AppStore {
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
};
