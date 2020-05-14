import { Component, OnInit, OnDestroy} from '@angular/core';
import { ILoginResponse } from '../shared/_models/user';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
// import * as _ from 'lodash';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {
  public units: string[];
  public user: Partial<ILoginResponse>;

  constructor(
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit() {
    this.user = this.service.user;
    this.units = this.service.units;
    console.log('panel');
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // it could make sense to destroy panel in logout paranoidal case
  }

}
