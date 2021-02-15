import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HeadingsComponent } from './components/headings/headings.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'headings', component: HeadingsComponent },
  // { path: '', component: AppComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
