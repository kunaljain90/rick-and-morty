import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoFromApi, DataFromAPI } from './types/api';


const RICK_AND_MORTY_API_MAIN_URL = "https://rickandmortyapi.com/api/character";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

   getAllCharacters(){
    return this.http.get<{ info: InfoFromApi; results: DataFromAPI[] }>(RICK_AND_MORTY_API_MAIN_URL)
  }

  getCharacterDetail(id: string){
    return this.http.get<DataFromAPI>(`${RICK_AND_MORTY_API_MAIN_URL}/${id}`);
  }
}
