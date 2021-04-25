import { SeasonService } from 'src/app/core/services/http/season.service';
import { Season } from './../../../core/models/season';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SeasonFormData } from 'src/app/core/models/season-form-data';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss'],
})
export class SeasonFormComponent implements OnInit {
  seasonForm: FormGroup;

  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _seasonService: SeasonService,
    private _dialogRef: MatDialogRef<SeasonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SeasonFormData
  ) {
    this.formAction = data.toUpdate ? 'Change the world' : 'Renew the world';

    if (data.toUpdate) {
      this.seasonForm = this.fb.group({
        release_date: [
          data.season.release_date,
          [Validators.required, this.noWhitespaceValidator],
        ],
        final_date: [
          data.season.final_date,
          [Validators.required, this.noWhitespaceValidator],
        ],
        episodes: [data.season.episodes, [Validators.required]],
        introduction: [data.season.introduction, [Validators.required]],
      });
    } else {
      this.seasonForm = this.fb.group({
        release_date: ['', [Validators.required, this.noWhitespaceValidator]],
        final_date: ['', [Validators.required, this.noWhitespaceValidator]],
        episodes: ['', [Validators.required]],
        introduction: ['', [Validators.required]],
      });
    }
  }

  ngOnInit(): void {}

  onSubmit(season: Season) {
    if (this.seasonForm.valid) {
      if (this.data.toUpdate) {
        season.id = this.data.season.id;
        this._seasonService.put(season).subscribe((next) => {
          console.log('Season updated');
          this.seasonForm.reset();
          this._dialogRef.close();
        });
      } else {
        this._seasonService.post(season).subscribe((next) => {
          console.log('Season added');
          this.seasonForm.reset();
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
