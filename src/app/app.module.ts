import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { GridComponent } from './components/grid/grid.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LinksComponent } from './components/links/links.component';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { VirtualscrollingComponent } from './components/virtualscrolling/virtualscrolling.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { StyleComponent } from './components/style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeadingsComponent,
    GridComponent,
    AccordionComponent,
    LinksComponent,
    CardComponent,
    SidenavComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatatableComponent,
    VirtualscrollingComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
