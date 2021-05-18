import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from "./views/page/page.component";
import { Page2Component } from "./views/page2/page2.component";
const routes: Routes = [
  {
    path:'',
    component:Page2Component
  },
  {
    path:'page',
    component:PageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
