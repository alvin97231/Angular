import { Injectable } from 'angular2/core';

import { User } from './models/user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUsers() {
    return Promise.resolve(USERS);
  }

  getUser(id: number) {
    return Promise.resolve(USERS).then(
      users => user.filter(user => user.id === id)[0]
    );
  }
}
