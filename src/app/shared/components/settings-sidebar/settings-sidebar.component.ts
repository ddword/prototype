import { Component, OnInit } from '@angular/core';
import { PreferencesService } from './../../services/preferences.service';
import { DataStoreService } from '../../services/data-store.service';
import { DocumentationService } from './../../../unit-modules/documentation/documentation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IModule } from './../../_models/preferences';

@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.scss']
})
export class SettingsSidebarComponent implements OnInit {
  public toggleSlide: boolean;
  public config: IModule;
  public isActiveDownload: boolean;

  constructor(
    private router: Router,
    private pService: PreferencesService,
    private docsService: DocumentationService,
    private store: DataStoreService,
  ) {
    const preferences = this.pService.settings;
    const url = this.router.url.replace('/unit/', '');
    this.getSettingsForChildModule(preferences, url); }

  ngOnInit() {
  }

  public onShowSettingsBar() {
    this.toggleSlide = this.toggleSlide ? false : true;
  }

  public getSettingsForChildModule(preferences: [IModule], url: string) {
    if (preferences) {
      this.config = preferences.filter((unit) => {
        return unit.module.toLowerCase() === url;
      })[0];
      console.log(this.config, 'config');
    }
  }

  public onUpdate($event) {

  }

  public onEdit($event) {

  }

  public onDelete($event) {

  }

  public onDownload($event) {
    this.isActiveDownload = this.isActiveDownload ? false : true;
    const config = $event.target.textContent;
    // it's temporary, use storeDataService
    this.docsService.actionOccurs(config, this.isActiveDownload);
  }
}
