import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { GridComponent } from './components/grid/grid.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LinksComponent } from './components/links/links.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeadingsComponent,
    GridComponent,
    AccordionComponent,
    LinksComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
