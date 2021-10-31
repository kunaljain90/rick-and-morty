import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromAPI, InfoFromApi } from './types/api';
import { map } from 'rxjs/operators';

const RICK_AND_MORTY_API_MAIN_URL = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<DataFromAPI[]> {
    return this.http
      .get<{
        results: DataFromAPI[];
      }>(RICK_AND_MORTY_API_MAIN_URL)
      .pipe(map((el) => el.results));
  }

  getCharacterDetail(id: string): Observable<DataFromAPI> {
    return this.http.get<DataFromAPI>(`${RICK_AND_MORTY_API_MAIN_URL}/${id}`);
  }

  getAllPages(): Observable<number> {
    return this.http
      .get<{ results: DataFromAPI[]; info: InfoFromApi }>(
        RICK_AND_MORTY_API_MAIN_URL
      )
      .pipe(map((el) => el.info.pages));
  }

  getAllCharactersFromPage(page: string): Observable<DataFromAPI[]> {
    return this.http
      .get<{
        results: DataFromAPI[];
      }>(`${RICK_AND_MORTY_API_MAIN_URL}/?page=${page}`)
      .pipe(map((el) => el.results));
  }

  searchCharacter(name: string): Observable<DataFromAPI[]> {
    return this.http
      .get<{
        results: DataFromAPI[];
      }>(`${RICK_AND_MORTY_API_MAIN_URL}/?name=${name}`)
      .pipe(map((el) => el.results));
  }
}
