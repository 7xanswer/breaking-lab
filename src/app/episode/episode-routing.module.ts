import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EpisodeListComponent,
      },
      {
        path: 'episodes',
        component: EpisodeListComponent,
      },
      {
        path: 'episodes/:id',
        component: EpisodeDetailComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeRoutingModule {}
