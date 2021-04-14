import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from '../../models/season';

@Injectable({
  providedIn: 'root',
})
export class SeasonService {

  endPoint: string = environment.seasonEndpoint;

  constructor(private _httpClient: HttpClient) {}

  /*get(): Observable<Season[]> {
    return this._httpClient.get<Season[]>("http://localhost:3000/seasons");
  }*/

  get(): Observable<Season[]> {
    return this._httpClient.get<Season[]>(this.endPoint);
  }

  getEpisodes(id: number): Observable<Season[]> {
    return this._httpClient.get<Season[]>(this.endPoint + '/' + id + '/episodes');
  }

  post(season: Season): Observable<Season> {
    return this._httpClient.post<Season>(this.endPoint, season);
  }

  put(season: Season): Observable<Season> {
    return this._httpClient.put<Season>(
      this.endPoint + '/' + season.id,
      season
    );
  }

  delete(season: Season): Observable<Season> {
    return this._httpClient.delete<Season>(this.endPoint + '/' + season.id);
  }
}
