import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonRoutingModule } from './season-routing.module';
import { SeasonComponent } from './season.component';
import { SeasonListComponent } from './pages/season-list/season-list.component';
import { SharedModule } from '../shared/shared.module';
import { SeasonFormComponent } from './components/season-form/season-form.component';
import { SeasonDetailComponent } from './pages/season-detail/season-detail.component';

@NgModule({
  declarations: [
    SeasonComponent,
    SeasonListComponent,
    SeasonFormComponent,
    SeasonDetailComponent,
  ],
  imports: [CommonModule, SeasonRoutingModule, SharedModule],
})
export class SeasonModule {}
