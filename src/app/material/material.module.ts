import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
