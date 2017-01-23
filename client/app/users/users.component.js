'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './users.routes';

export class UsersComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('qidoApp.users', [uiRouter])
  .config(routes)
  .component('users', {
    template: require('./users.html'),
    controller: UsersComponent,
    controllerAs: 'usersCtrl'
  })
  .name;
