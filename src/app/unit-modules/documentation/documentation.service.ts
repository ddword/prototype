import { Injectable } from '@angular/core';
import { ApiRestService } from '../../shared/services/api-rest.service';
import { Observable, of } from 'rxjs';
import { first, take, map, tap } from 'rxjs/operators';
import { IHighCategories } from './../../shared/_models/categories';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private error: boolean;
  private highCategories: IHighCategories;
  public docsTree: any;
  public zipLink: string;
  public actionsList: {};

  constructor(
    private api: ApiRestService,
   // private store: DataStoreService,
  ) { }

  // Http queries
  // ---------------------------------------------

  /** invoke api's request to get high categories for Documentation */
  public getHighCategories(lang: string, module: string) {
    if (!this.categories) {
      this.api.highCategories(lang, module)
      .pipe(first())
      .subscribe((data) => {
        if (data.categories) {
          this.highCategories = data;
        }
      },
      error => {
        this.error = error;
      });
    }
  }

  /** invoke api's request to get documents tree for Documentation */
  public documentsTree(lang: string, category: string) {
      this.api.documentsTree(lang, category)
        .pipe(take(1))
        .subscribe((data) => {
          if (data.children) {
            this.docsTree = data;
          }
        },
        error => {
          this.error = error;
        });
  }

  /** just to admin role, invoke api's request to download files in zip archive */
  public downloadZip(lang: string, category: string, files: string[], count: number) {
    this.api.downloadZip(lang, category, files, count)
    .pipe(first())
    .subscribe((data) => _.set(this, 'zipLink', data),
      error => {
        this.error = error;
      });
  }

  public documentsUpdate(lang: string, category: string, files: []) {

  }

  public documentsEdit(lang: string, category: string, files: []) {

  }

  public documentsDelete(lang: string, category: string, files: []) {

  }


  // Public methods
  // ---------------------------------------------

  public get categories() {
    return _.get(this.highCategories, 'categories');
  }

  public get pageTitle() {
    return _.get(this.highCategories, 'title');
  }

  public get subcategories() {
    if (this.docsTree && this.docsTree.name && this.docsTree.type === 'directory') {
      const directories = _.get(this.docsTree, 'children');
      return directories;
    }
  }

  // delete it, put in DataService
  public actionOccurs(config, action) {
    if (config === 'Download') {
      _.set(this.actionsList, 'isDownload', action);
      localStorage.setItem('actions.isDownload', action);
    }
  }
}
