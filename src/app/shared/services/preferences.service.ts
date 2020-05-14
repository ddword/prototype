import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IModule, ISettings } from './../_models/preferences';
import { ApiRestService } from './api-rest.service';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  public preferences: ISettings;
  private error: boolean;

  constructor(
    private api: ApiRestService
  ) { }

  // Http queries
  // ---------------------------------------------
  /** invoke api request to get global settings for units. Todo: put all data in preferences */
  public moduleSettings(userId: string, lang: string) {
    if (!this.settings) {
      this.api.moduleSettings(userId, lang)
      .pipe(first())
      .subscribe(
        (data: ISettings) => {
          if (data.children) {
            _.set(this, 'preferences', data);
          }
        },
        error => {
          this.error = error;
        });
    }
  }

  // Public methods
  // ---------------------------------------------
  public get settings() {
    return _.get(this.preferences, 'children');
  }

}
