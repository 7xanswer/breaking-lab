import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonComponent } from './season.component';
import { SeasonListComponent } from './pages/season-list/season-list.component';



@NgModule({
  declarations: [SeasonComponent, SeasonListComponent],
  imports: [
    CommonModule
  ]
})
export class SeasonModule { }
