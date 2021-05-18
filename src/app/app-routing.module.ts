import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GridComponent } from './components/grid/grid.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { LinksComponent } from './components/links/links.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'headings', component: HeadingsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'accord', component: AccordionComponent },
  { path: 'links', component: LinksComponent },
  { path: 'card', component: CardComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'datatable', component: DatatableComponent },
  // { path: '', component: AppComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
