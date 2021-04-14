import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Season } from 'src/app/core/models/season';
import { SeasonService } from 'src/app/core/services/http/season.service';


@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.scss'],
})
export class SeasonDetailComponent implements OnInit {
  title: string;
  synopsis: string;
  seasonId: number;
  episode: number;
  air_date: string;
  rating: number;
  imdb: string;
  netflix: string;
  thumbnail: string;
  season$: Observable<Season[]>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _seasonService: SeasonService,
  ) {}

  ngOnInit(): void {
    this.seasonId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    this.title = String(this._activateRoute.snapshot.paramMap.get('title'));
    this.synopsis = String(this._activateRoute.snapshot.paramMap.get('synopsis'));
    this.episode = Number(this._activateRoute.snapshot.paramMap.get('episode'));
    this.air_date = String(this._activateRoute.snapshot.paramMap.get('air_date'));
    this.rating = Number(this._activateRoute.snapshot.paramMap.get('rating'));
    this.imdb = String(this._activateRoute.snapshot.paramMap.get('imdb'));
    this.netflix = String(this._activateRoute.snapshot.paramMap.get('netflix'));
    this.thumbnail = String(this._activateRoute.snapshot.paramMap.get('thumbnail'));

    if (this.seasonId) {
      this.fetchData(this.seasonId);
    }
  }

  fetchData(id: number): void {
    this.season$ = this._seasonService.getEpisodes(id);
  }
}
