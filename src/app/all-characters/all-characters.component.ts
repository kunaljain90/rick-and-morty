
import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';
import { DataFromAPI, ImagesFromApi, InfoFromApi } from '../shared/types/api';


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

  constructor(private characterService: CharactersService){}

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.characterService.getAllCharacters().subscribe(char => {
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

