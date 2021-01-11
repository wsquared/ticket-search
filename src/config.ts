import path from 'path';

const dirArray = __dirname.split('/');

const location = dirArray
  .splice(0, dirArray.indexOf('ticket-search') + 1)
  .join('/');

export const TICKETS_PATH = path.join(location, './data/tickets.json');
export const ORGANIZATIONS_PATH = path.join(
  location,
  './data/organizations.json'
);
export const USERS_PATH = path.join(location, './data/users.json');
