import { Component, OnInit, DoCheck } from '@angular/core';
import { DocumentationService } from './../documentation.service';
import { DataStoreService } from '../../../shared/services/data-store.service';
import { Observable, from } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit, DoCheck {
  eventCategory: string;
  // public categories: string[];
  // public docsTree: any;
  public subcategories: any;
  public files: [];
  public actions: object;
  public pageTitle: string;
  public description: object;
  isDownload: false;

  constructor(
    private router: Router,
    private docService: DocumentationService,
    private store: DataStoreService,
   // private dataService: DataService,
  ) {
    // lang temporay harcoded, keep and take it from localStorage
    this.docService.getHighCategories('ENG', 'Documents');
    this.isDownload = JSON.parse(localStorage.getItem('actions.isDownload'));
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.subcategories = this.docService.subcategories;
    this.pageTitle = this.docService.pageTitle;
  }

  public getSubcategories($event) {
    this.eventCategory = $event;
    this.docService.documentsTree('ENG', this.eventCategory);
  }

  public scopeFiles($event) {
    this.files = $event;
  }

  public scopeTitle($event) {
    this.description = $event;
  }

  public onDownload() {
    // this.docService.downloadZip(lang: string, category: string, files: string[], count: number)
  }
}
