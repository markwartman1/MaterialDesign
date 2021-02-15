import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
