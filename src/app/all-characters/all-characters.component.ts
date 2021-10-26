
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const RICK_AND_MORTY_API_MAIN_URL = "https://rickandmortyapi.com/api/character";

type ImagesFromApi = {
	name: string;
	image: string;
	id: number;
};

type URLNameApi = { name: string; url: string };

type InfoFromApi = {
    count: number,
    pages: number,
    next: string,
    prev: null | string
  }

type DataFromAPI = {
	id: number;
	name: string;
	status: string;
	type: string;
	gender: string;
	origin: URLNameApi;
	location: URLNameApi;
	image: string;
	episode: string[];
	url: string;
	created: string;
};

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {
title = 'rick-and-morty';
  characters:DataFromAPI[] = [];
  info:InfoFromApi = {
    count: 0,
    pages: 0,
    next: '',
    prev: null
  };
  charactersNameAndImage:ImagesFromApi[] = []

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.http.get<{ info: InfoFromApi; results: DataFromAPI[] }>(RICK_AND_MORTY_API_MAIN_URL).subscribe(char => {
      this.characters = char.results;
      this.info = char.info;
      this.pickCharactersNameAndImage(this.characters);
    });
  }

  pickCharactersNameAndImage(characters: DataFromAPI[]){
    characters.forEach(character => {
      this.charactersNameAndImage.push({
        name: character.name,
        image: character.image,
        id: character.id
      })
    })
  }

}

