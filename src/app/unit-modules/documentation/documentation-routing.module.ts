import { NgModule } from '@angular/core';
import { DocumentsComponent } from './documents/documents.component';
import { Routes, RouterModule } from '@angular/router';

const DocumentationRoutes: Routes = [
  { path: '', component: DocumentsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(DocumentationRoutes) ],
    exports: [ RouterModule ]
})
export class DocumentationRoutingModule {}
