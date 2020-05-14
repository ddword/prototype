import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents/documents.component';
import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { PreferencesService } from './../../shared/services/preferences.service';
import { DocumentationService } from './documentation.service';
import { DocumentationRoutingModule } from './documentation-routing.module';


/**
 * Todo: TreeDocumentsComponent ListFilesComponent?
 */
@NgModule({
  imports: [
    DocumentationRoutingModule,
    CommonModule
  ],
  exports: [CategoriesTreeComponent],
  providers: [DocumentationService, PreferencesService],
  declarations: [DocumentsComponent, CategoriesTreeComponent]
})
export class DocumentationModule {}
