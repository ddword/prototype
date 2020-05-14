import { Component, OnInit, Input } from '@angular/core';
import { ILoginResponse } from '../../../shared/_models/user';
import _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: Partial<ILoginResponse>;
  @Input() units: string[];
  public toggleNavBar: boolean;
  public currentLanguage: string;

  constructor() {
    this.currentLanguage = localStorage.getItem('currentLanguage');
  }

  ngOnInit() {
  }

  onShowNavBar() {
    this.toggleNavBar = this.toggleNavBar ? false : true;
  }
}
