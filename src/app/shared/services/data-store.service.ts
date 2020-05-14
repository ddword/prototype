import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { shareReplay, map, filter, first, take } from 'rxjs/operators';
import { DocumentationService } from './../../unit-modules/documentation/documentation.service';
import { ISubcategory } from './../_models/subcategory';
import { IFile } from './../_models/file';
import { ITextDescription } from './../_models/textDescription';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _subcats$: Subject<ISubcategory[]> = new BehaviorSubject<ISubcategory[]>([]);
  public subcats$ = this._subcats$.asObservable();

  private _files$: Subject<IFile[]> = new BehaviorSubject<IFile[]>([]);
  public files$ = this._files$.asObservable();

  public textDescription$ = new BehaviorSubject<ITextDescription>(null);

  constructor(
    private docs: DocumentationService
  ) { }
}
