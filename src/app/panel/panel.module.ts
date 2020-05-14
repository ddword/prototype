import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { UserService } from '../shared/services/user.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [PanelComponent, HeaderComponent],
  imports: [CommonModule, PanelRoutingModule],
  providers: [UserService],
  exports: [CommonModule, HeaderComponent],
  bootstrap: [PanelComponent]
})
export class PanelModule { }
