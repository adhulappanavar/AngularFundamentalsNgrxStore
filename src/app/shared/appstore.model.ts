

import {IEvent} from '../shared/index';

export interface AppStore {
  events: IEvent[];
  selectedEvent: IEvent;
};
