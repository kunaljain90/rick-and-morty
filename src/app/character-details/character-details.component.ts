import { CharactersService } from './../shared/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const RICK_AND_MORTY_API_MAIN_URL = "https://rickandmortyapi.com/api/character";

type DataFromAPI = {
	id: number | null;
	name: string;
	gender: string;
	image: string;
	episode: string[];
  status: string;
  species: string;
};

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  id:string | null = '';
  characterDetail:DataFromAPI = {
	id: null,
	name: '',
	gender: '',
	image: '',
	episode: [],
	status: '',
  species: ''
};

  constructor(private router: ActivatedRoute, private characterService:CharactersService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.getCharacterDetail();
  }

  getCharacterDetail(){
    if(!this.id) {return};
      this.characterService.getCharacterDetail(this.id).subscribe(char => this.characterDetail = char);
  }

}
