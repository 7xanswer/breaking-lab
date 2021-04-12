import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../../models/episode';

@Injectable({
  providedIn: 'root',
})

export class EpisodeService {
  endPoint: string = environment.episodeEndpoint;

  constructor(private _httpClient: HttpClient) {}

  /*get(): Observable<Season[]> {
    return this._httpClient.get<Season[]>("http://localhost:3000/seasons");
  }*/

  get(): Observable<Episode[]> {
    return this._httpClient.get<Episode[]>(this.endPoint);
  }

  getById(id: number): Observable<Episode> {
    return this._httpClient.get<Episode>(this.endPoint + '/' + id);
  }

  post(episode: Episode): Observable<Episode> {
    return this._httpClient.post<Episode>(this.endPoint, episode);
  }

  put(episode: Episode): Observable<Episode> {
    return this._httpClient.put<Episode>(
      this.endPoint + '/' + episode.id,
      episode
    );
  }

  delete(episode: Episode): Observable<Episode> {
    return this._httpClient.delete<Episode>(this.endPoint + '/' + episode.id);
  }

  descSearch(): Observable<Episode[]> {
    return this._httpClient.get<Episode[]>(
      this.endPoint + '?_sort=id&_order=desc'
    );
  }
}
