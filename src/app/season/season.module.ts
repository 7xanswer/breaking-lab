import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonRoutingModule } from './season-routing.module';
import { SeasonComponent } from './season.component';
import { SeasonListComponent } from './pages/season-list/season-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SeasonComponent, SeasonListComponent],
  imports: [
    CommonModule,
    SeasonRoutingModule,
    SharedModule
  ]
})
export class SeasonModule { }
