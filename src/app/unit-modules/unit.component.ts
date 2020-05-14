import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IModule, ISettings } from './../shared/_models/preferences';
import { UserService } from './../shared/services/user.service';
import { PreferencesService } from './../shared/services/preferences.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  public userSettings: object;

  constructor(
    private uService: UserService,
    private pService: PreferencesService,
    private router: Router,
    ) {
      this.userSettings = this.uService.settings;
      // invoke unit preferences
      this.pService.moduleSettings(_.get(this.userSettings, 'guid'), _.get(this.userSettings, 'lang'));
    }

  ngOnInit() {

  }

  public showSidebar() {
    const unitCurrentUrl = this.router.url.replace('/unit/', '');
    const admin = _.get(this.pService, 'settings', []).filter((pref) => pref.download === true ? pref.module.valueOf() : false)[0];

    const isAdminUser = _.get(this.userSettings, 'isAdmin');
    const isAdminModule = _.get(admin, 'module', '').toLowerCase().includes(unitCurrentUrl);
    const isPermittedUrl = _.get(this.uService, 'units', []).map((unit: string) => unit.toLowerCase()).includes(unitCurrentUrl);

    return isAdminModule && isPermittedUrl && _.get(this.userSettings, 'isAdmin');
  }
}
