import { EpisodeService } from 'src/app/core/services/http/episode.service';
import { Episode } from './../../../core/models/episode';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodeFormData } from 'src/app/core/models/episode-form-data';

@Component({
  selector: 'app-episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.scss'],
})
export class EpisodeFormComponent implements OnInit {
  episodeForm: FormGroup;

  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _episodeService: EpisodeService,
    private _dialogRef: MatDialogRef<EpisodeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EpisodeFormData
  ) {
    this.formAction = data.toUpdate ? 'Change the world' : 'Renew the world';

    if (data.toUpdate) {
      this.episodeForm = this.fb.group({
        title: [
          data.episode.title,
          [Validators.required, this.noWhitespaceValidator],
        ],
        synopsis: [
          data.episode.synopsis,
          [Validators.required, this.noWhitespaceValidator],
        ],
        season_id: [data.episode.seasonId, [Validators.required]],
        episode: [data.episode.episode, [Validators.required]],
        air_date: [data.episode.air_date, [Validators.required]],
        rating: [data.episode.rating, [Validators.required]],
        imdb: [data.episode.imdb, [Validators.required]],
        netflix: [data.episode.netflix, [Validators.required]],
        thumbnail: [data.episode.thumbnail, [Validators.required]],
      });
    } else {
      this.episodeForm = this.fb.group({
        title: ['', [Validators.required, this.noWhitespaceValidator]],
        synopsis: ['', [Validators.required, this.noWhitespaceValidator]],
        season_id: ['', [Validators.required]],
        episode: ['', [Validators.required]],
        air_date: ['', [Validators.required]],
        rating: ['', [Validators.required]],
        imdb: ['', [Validators.required]],
        netflix: ['', [Validators.required]],
        thumbnail: ['', [Validators.required]],
      });
    }
  }

  ngOnInit(): void {}

  onSubmit(episode: Episode) {
    if (this.episodeForm.valid) {
      if (this.data.toUpdate) {
        episode.id = this.data.episode.id;
        this._episodeService.put(episode).subscribe((next) => {
          console.log('YES WE DID IT !!! WE HAVE updated A SEASON');
          this.episodeForm.reset();
          this._dialogRef.close();
        });
      } else {
        this._episodeService.post(episode).subscribe((next) => {
          console.log('YES WE DID IT !!! WE HAVE ADDED A NEW SEASON');
          this.episodeForm.reset();
          this._dialogRef.close();
        });
      }
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
