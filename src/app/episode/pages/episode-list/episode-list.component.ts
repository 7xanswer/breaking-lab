import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/core/models/episode';
import { MatDialog } from '@angular/material/dialog';
import { EpisodeService } from 'src/app/core/services/http/episode.service';
import { EpisodeFormComponent } from '../../components/episode-form/episode-form.component';
import { EpisodeFormData } from 'src/app/core/models/episode-form-data';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes$: Observable<Episode[]>;
  episodesDetail: Observable<Episode>;
  displayedColumns: string[] = [
    'id',
    'title',
    'season_id',
    'episode',
    'air_date',
    'rating',
    'imdb',
    'synopsis',
    'netflix',
    'thumbnail',
  ];

  constructor(
    private _episodeService: EpisodeService,
    public dialog: MatDialog
  ) {}

  isLinear = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.episodes$ = this._episodeService.get();
  }

  delete(episode: Episode) {
    this._episodeService.delete(episode).subscribe((next) => {
      this.loadData();
    });
  }

  openDialog(toUpdate: boolean, episode: Episode) {
    const episodeFormData: EpisodeFormData = {
      toUpdate: toUpdate,
      episode: episode,
    };

    const dialogRef = this.dialog.open(EpisodeFormComponent, {
      data: episodeFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }
}
