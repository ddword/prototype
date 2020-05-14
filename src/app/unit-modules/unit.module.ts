import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';
import { SettingsSidebarComponent } from './../shared/components/settings-sidebar/settings-sidebar.component';
import { UserService } from './../shared/services/user.service';
import { DataStoreService } from './../shared/services/data-store.service';
import { PreferencesService } from './../shared/services/preferences.service';
import { UnitRoutingModule } from './unit-routing.module';


@NgModule({
  declarations: [ UnitComponent, SettingsSidebarComponent ],
  imports: [
    CommonModule,
    UnitRoutingModule
  ],
  providers: [UserService, PreferencesService, DataStoreService],
  exports: [CommonModule, SettingsSidebarComponent],
  bootstrap: [UnitComponent]
})
export class UnitModule { }
