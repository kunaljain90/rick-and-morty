import { Observable } from 'rxjs';
import { CharactersService } from './../shared/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFromAPI } from '../shared/types/api';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  id: string | null = '';
  characterDetail$!: Observable<DataFromAPI>;

  constructor(
    private router: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.getCharacterDetail();
  }

  getCharacterDetail() {
    if (!this.id) {
      return;
    }
    this.characterDetail$ = this.characterService.getCharacterDetail(this.id);
  }
}
