import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { SharedModule } from '../shared/shared.module';
import { EpisodeFormComponent } from './components/episode-form/episode-form.component';

@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodeListComponent,
    EpisodeFormComponent,
  ],
  imports: [CommonModule, EpisodeRoutingModule, SharedModule],
})
export class EpisodeModule {}
