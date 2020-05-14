import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  /*
   * @params todo if it needs, integrate HomePageModuleRouter instead of RouterModule
   */
  imports: [
    RouterModule.forChild([{
      path: '',
      component: HomePageComponent
    }])
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
