import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SharedModule { }
