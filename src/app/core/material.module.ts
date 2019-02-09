import {
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule {}
