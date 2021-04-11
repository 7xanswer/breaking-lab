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
  seasonId: number;

  season$: Observable<Season>;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _seasonService: SeasonService
  ) {}

  ngOnInit(): void {
    this.seasonId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.seasonId) {
      this.fetchData(this.seasonId);
    }
  }

  fetchData(id: number): void {
    this.season$ = this._seasonService.getById(id);
  }
}
