import { Injectable } from '@angular/core';
import { RequestCache } from '../../shared/services/request-cache.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  private navigation = this.router.getCurrentNavigation();
  private data = _.get(this.navigation, 'extras.state') || JSON.parse(localStorage.getItem('UserToken'));

  constructor(
    private router: Router,
    private cache: RequestCache
  ) {
    localStorage.setItem('currentLanguage', _.get(this.data, 'preferredLanguage'));
}
  // rename user like userName or userTitle
  public get user() {
    const userNames = {
      firstName: _.get(this.data, 'firstName'),
      lastName: _.get(this.data, 'lastName'),
      preferredLanguage: _.get(this.data, 'preferredLanguage')
    };
    return userNames;
  }

  public get units() {
    const panelData = _.get(this.data, 'rightsList');
    return panelData;
  }

  // temporary get user data sans rightsList and userGroupRights
  public get userData() {
    const data = _.omit(this.data, 'rightsList', 'userGroupRights');
    return data;
  }

  public get settings() {
    if (this.data) {
      const rights = _.extend({}, {
        id: this.data.id,
        guid: this.data.guid,
        organization: this.data.organization,
        role: this.data.role,
        lang: this.data.preferredLanguage,
        userGroupRights: this.data.userGroupRights,
        userRoleId: this.data.userRoleId,
        isAdmin: this.data.isSystemAdministrator,
        isPartner: this.data.isPartner,
      });
      return rights;
    }
  }
}
