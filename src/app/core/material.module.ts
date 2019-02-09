import { MatButtonModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule],
  exports: [MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule],
  declarations: []
})
export class MaterialModule { }
