import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from '../../models/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Season[]> {
    return this._httpClient.get<Season[]>("http://localhost:3000/seasons");
  }
}
