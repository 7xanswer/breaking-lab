import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from 'src/app/core/models/season';
import { MatDialog } from '@angular/material/dialog';
import { SeasonService } from 'src/app/core/services/http/season.service';
import { SeasonFormComponent } from '../../components/season-form/season-form.component';
import { SeasonFormData } from 'src/app/core/models/season-form-data';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss'],
})
export class SeasonListComponent implements OnInit {
  seasons$: Observable<Season[]>;
  seasonsDetail: Observable<Season>;
  displayedColumns: string[] = [
    'id',
    'releaseDate',
    'finalDate',
    'episodes',
    'introduction',
    'update',
    'delete',
  ];

  constructor(
    private _seasonService: SeasonService,
    public dialog: MatDialog
  ) {}

  isLinear = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.seasons$ = this._seasonService.get();
  }

  delete(season: Season) {
    this._seasonService.delete(season).subscribe((next) => {
      this.loadData();
    });
  }

  openDialog(toUpdate: boolean, season: Season) {
    const seasonFormData: SeasonFormData = {
      toUpdate: toUpdate,
      season: season,
    };

    const dialogRef = this.dialog.open(SeasonFormComponent, {
      data: seasonFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }
}
