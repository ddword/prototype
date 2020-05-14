import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentationService } from './../documentation.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.html',
  styleUrls: ['./categories-tree.scss']
})
export class CategoriesTreeComponent implements OnInit, DoCheck {
  @Output() eventChosenHighCategory = new EventEmitter<string>();
  @Output() filesOfSubcategory = new EventEmitter<[]>();
  @Output() titleOfSubcategory = new EventEmitter<object>();
  public docs: any;
  public categories: string[];
  public subcategories: any;
  public files: [];
  public toggleShowingList: boolean;
  public isActiveCategory: boolean;

  constructor(
    private service: DocumentationService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.docs = this.service.docsTree;
    this.categories = this.service.categories;
    this.subcategories = this.service.subcategories;
    /*.filter(item => {
      if (item.type === 'directory' && item.children.length > 0) {
        return item.children.filter(key => {
         // return key.type === 'directory' && key.children.length > 0;
          if (key.type === 'directory' && key.children.length > 0) {
            return key.children.filter( o => {
              return o.type === 'directory' && o.children.length > 0;
            });
          } else {
            return [];
          }
        });
      }
    });*/
  }

  public chooseHighCategory(event, category: string) {
    event.stopPropagation();
    this.service.docsTree = [];
    this.filesOfSubcategory.emit([]);
    this.isActiveCategory = this.isActiveCategory ? false : true;

    const elementsAll = document.querySelectorAll('.docs-tree li.clicked');
    if (elementsAll.length > 0) {
      [].forEach.call(elementsAll, (element) => {
        element.classList.remove('clicked');
      });
    }
    // category = 'DISTRIBUTOR DOWNLOADS';
    if (!this.docs || this.docs && this.docs.name !== category ) {
      this.eventChosenHighCategory.emit(category);
    }
  }

  public isSameParent(parentName: string, parentsList: any) {
    const status = parentsList.filter(parent => parent.name === parentName).length > 0;
    return status;
  }

  public showChild(event: any, subcategory: any, parentName: string, parentsList: []) {
    event.stopPropagation();
    this.files = [];
    this.toggleShowingList = false;
    const el = event.currentTarget;
    const elementsAll = document.querySelectorAll('.docs-tree li.clicked');

    /** delete class clicked from all li elements in category tree */
    if (elementsAll.length > 0 && !el.classList.contains('clicked') && !this.isSameParent(parentName, parentsList)) {
      [].forEach.call(elementsAll, (element) => {
        element.classList.remove('clicked');
      });
    }

    /** mark li element as clicked */
    el.classList.toggle('clicked');

    /** toggle collapsible-body */
    this.toggleShowingList = el.classList.contains('clicked') || this.isSameParent(parentName, parentsList) ? true : false;

    /** filter files array for emmiting in document template. Todo: put in special method */
    if (this.toggleShowingList && el.classList.contains('clicked') && subcategory.children.length > 0) {
      this.files = subcategory.children.filter((file) => {
        return file.type && file.type !== 'directory' ? true : false;
      });
    }
    this.filesOfSubcategory.emit(this.files);
    const description = _.extend({}, {
      name: subcategory.name,
      id: subcategory.id,
      tags: subcategory.tags,
      // description: subcategory.description
    });
    this.titleOfSubcategory.emit(description);
  }
}
