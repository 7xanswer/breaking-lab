import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { SeasonListComponent } from './pages/season-list/season-list.component';
import { SeasonComponent } from './season.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: "seasons"
      },
      {
        path: "seasons",
        component: SeasonListComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonRoutingModule { }
