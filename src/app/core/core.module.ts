import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class CoreModule { }
