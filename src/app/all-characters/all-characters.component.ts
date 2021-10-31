import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CharactersService } from '../shared/characters.service';
import { DataFromAPI } from '../shared/types/api';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  characters$!: Observable<DataFromAPI[]>;
  searchedCharacter$ = new Subject<string>();
  allPagesArray: number[] = [];

  constructor(private characterService: CharactersService) {
    this.searchedCharacter$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((char) => this.search(char));
  }

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

  getPageNumber(page: string) {
    this.characters$ = this.characterService.getAllCharactersFromPage(page);
  }

  search(term: string) {
    this.characters$ = this.characterService.searchCharacter(term);
  }
}
