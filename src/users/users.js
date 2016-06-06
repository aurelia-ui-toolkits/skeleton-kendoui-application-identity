import {inject} from 'aurelia-framework';
import {Endpoint} from 'aurelia-api';
import 'fetch';

@inject(Endpoint.of('github'))
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(githubEndpoint) {
    this.githubEndpoint = githubEndpoint;
  }

  activate() {
    this.githubEndpoint.find('users')
      .then(users => this.users = users);
  }
}
