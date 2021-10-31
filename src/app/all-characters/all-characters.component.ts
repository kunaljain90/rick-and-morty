import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from '../shared/characters.service';
import { DataFromAPI, ImagesFromApi, InfoFromApi } from '../shared/types/api';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  characters$!: Observable<DataFromAPI[]>;
  allPagesArray: number[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.characters$ = this.characterService.getAllCharacters();
    this.pagesArray();
  }

  pagesArray() {
    this.characterService
      .getAllPages()
      .subscribe(
        (el) =>
          (this.allPagesArray = Array.from({ length: el }, (_, i) => i + 1))
      );
  }

  getPageNumber(page: any) {
    this.characters$ = this.characterService.getAllCharactersFromPage(
      page.innerText
    );
  }
}
