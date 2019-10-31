import { EVENTS } from './types';

export const update_events = events => {
  return { type: EVENTS.UPDATE_EVENT, payload: events }
}

export const select_event = id => {
  return { type: EVENTS.SELECT_EVENT, payload: id }
}

export const create_event = event => {
  return { type: EVENTS.CREATE_EVENT, payload: {...event, id: '3', members: []} }
}