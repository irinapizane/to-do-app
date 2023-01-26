import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    OverlayModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    OverlayModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
