import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { LinksComponent } from './components/links/links.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'headings', component: HeadingsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'accord', component: AccordionComponent },
  { path: 'links', component: LinksComponent },
  { path: 'card', component: CardComponent },
  // { path: '', component: AppComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
