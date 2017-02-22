export const eventsreducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_EVENTS':
      return payload;
    case 'CREATE_EVENT':
      return [...state, payload];
    case 'UPDATE_EVENT':
      return state.map(event => {
        return event.id === payload.id ? Object.assign({}, event, payload) : event;
      });
    case 'DELETE_EVENT':
      return state.filter(event => {
        return event.id !== payload.id;
      });
    default:
      return state;
  }
};