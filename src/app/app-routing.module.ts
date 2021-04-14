import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  /*{
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'seasons',
    pathMatch: 'full',
    loadChildren: () =>
      import('./season/season.module').then((m) => m.SeasonModule),
  },
  {
    path: 'episodes',
    pathMatch: 'full',
    loadChildren: () =>
      import('./episode/episode.module').then((m) => m.EpisodeModule),
  },*/
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () => import('./season/season.module').then(m => m.SeasonModule)
  },
  {
    path: '',
    loadChildren: () => import('./episode/episode.module').then(m => m.EpisodeModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
