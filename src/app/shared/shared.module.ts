import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [MatTableModule, MatCardModule, MatGridListModule, FlexLayoutModule],
})
export class SharedModule {}
