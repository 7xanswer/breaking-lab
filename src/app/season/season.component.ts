import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from '../core/models/season';
import { SeasonService } from '../core/services/http/season.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
