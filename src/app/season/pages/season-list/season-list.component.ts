import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from 'src/app/core/models/season';
import { SeasonService } from 'src/app/core/services/http/season.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss'],
})
export class SeasonListComponent implements OnInit {
  seasons$: Observable<Season[]>;
  displayedColumns: string[] = [
    'id',
    'releaseDate',
    'finalDate',
    'episodes',
    'introduction',
  ];

  constructor(private _seasonService: SeasonService) {}

  ngOnInit(): void {
    this.seasons$ = this._seasonService.get();
  }
}
