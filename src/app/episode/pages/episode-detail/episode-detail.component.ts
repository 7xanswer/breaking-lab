import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/core/models/episode';
import { EpisodeService } from 'src/app/core/services/http/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  episodeId: number;

  episode$: Observable<Episode>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.episodeId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.episodeId) {
      this.fetchData(this.episodeId);
    }
  }

  fetchData(id: number): void {
    this.episode$ = this._episodeService.getById(id);
  }
}
