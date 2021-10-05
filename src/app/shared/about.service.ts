import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  public users = [
    {
      id: '0',
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    },
    {
      id: '1',
      name: 'Samantha Jones',
      email: 'sam@jones.com'
    },
    {
      id: '2',
      name: 'Michael Jordan',
      email: 'michael@jordon.net'
    }
  ];

  public getUsers = () => this.users;

  public getUserById = (id: string) => this.users.filter(user => user.id === id)[0];
}
