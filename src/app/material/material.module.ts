import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
